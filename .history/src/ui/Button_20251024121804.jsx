function Button({ children }) {
  return (
    <button
      className="mt-2 inline-block rounded-full bg-fuchsia-400 px-2 py-1 text-sm font-semibold capitalize tracking-wider text-stone-800 shadow-md transition-colors duration-300 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-fuchsia-200 disabled:cursor-not-allowed disabled:bg-stone-600 disabled:text-stone-300"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Placing Order ...' : 'Order now'}
    </button>
  );
}

export default Button;
