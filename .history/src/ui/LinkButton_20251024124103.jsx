import { Link } from 'react-router-dom';

function LinkButton({ to, children }) {
  if (to === '-1') {
    return <button onClick={() => navigate(-1)}>&larr; Go back</button>;
  }

  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
