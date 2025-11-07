import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';

function Home() {
  const usename = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="font-pizza mb-8 text-xl font-semibold md:text-3xl">
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
