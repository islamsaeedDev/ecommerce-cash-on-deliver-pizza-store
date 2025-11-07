import SearchOrder from '../features/order/SearchOrder';

function Home() {
  return (
    <div>
      <SearchOrder />
      <h1 className="text-3xl font-bold text-stone-700 underline">
        The best pizza.
        <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>
    </div>
  );
}

export default Home;
