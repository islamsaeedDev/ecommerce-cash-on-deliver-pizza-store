import { Link } from 'react-router-dom';

function Button({ children, to, type, disabled, onClick }) {
  const base =
    'text-sm mt-2 inline-block rounded-full bg-fuchsia-400 text-sm font-semibold capitalize tracking-wider text-stone-800 shadow-md transition-colors duration-300 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-fuchsia-200 disabled:cursor-not-allowed disabled:bg-stone-600 disabled:text-stone-300 ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm',
    round: base + 'px-2 py-1 md:px-2 md:py-1 text-lg',
    secondary:
      'text-sm mt-2 inline-block rounded-full  text-sm font-semibold capitalize tracking-wider text-stone-800 shadow-md transition-colors duration-300 hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-200 disabled:cursor-not-allowed disabled:bg-stone-600 disabled:text-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 text-xs md:text-sm border-2 border-stone-400',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button
        className={styles[type]}
        disabled={disabled}
        onClick={onClick}
        //   disabled={isSubmitting}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={styles[type]}
      disabled={disabled}
      //   disabled={isSubmitting}
    >
      {children}
    </button>
  );
}

export default Button;
