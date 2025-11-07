import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-fuchsia-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
