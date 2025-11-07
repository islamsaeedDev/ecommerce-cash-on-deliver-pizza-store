import SearchOrder from '../features/order/SearchOrder';

function Home() {
  return (
    <div>
      <SearchOrder />
      <h1 className="text-3xl font-bold text-fuchsia-500 underline">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export default Home;
