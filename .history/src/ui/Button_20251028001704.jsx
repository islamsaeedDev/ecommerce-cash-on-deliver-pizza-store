import { Link } from 'react-router-dom';

function Button({ children, to, type, disabled }) {
  const className =
    'mt-2 inline-block rounded-full bg-fuchsia-400 px-2 py-1 text-sm font-semibold capitalize tracking-wider text-stone-800 shadow-md transition-colors duration-300 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-fuchsia-200 disabled:cursor-not-allowed disabled:bg-stone-600 disabled:text-stone-300 sm:px-4 sm:py-3';

  const base =
    'mt-2 inline-block rounded-full bg-fuchsia-400text-sm font-semibold capitalize tracking-wider text-stone-800 shadow-md transition-colors duration-300 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-fuchsia-200 disabled:cursor-not-allowed disabled:bg-stone-600 disabled:text-stone-300 ';

  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-2 py-1 text-xs sm:px-3 sm:py-2',
  };

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button
      className={className}
      disabled={disabled}
      //   disabled={isSubmitting}
    >
      {children}
    </button>
  );
}

export default Button;
