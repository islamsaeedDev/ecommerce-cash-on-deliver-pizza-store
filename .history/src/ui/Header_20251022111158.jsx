import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="uppcase flex border-b border-stone-200 bg-fuchsia-500 px-4 py-3 sm:px-6">
      <Link className="tracking-[5px]" to="/">
        Fast Pizza
      </Link>
      {/* <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order/new">Order pizzas</Link>
      <Link to="/order">Orders</Link> */}
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
