import { Link } from 'react-router-dom';

function LinkButton() {
  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
      to="/menu"
    >
      &larr; Back to menu
    </Link>
  );
}

export default LinkButton;
