import { Link } from 'react-router-dom';

function LinkButton({ to, children }) {
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
