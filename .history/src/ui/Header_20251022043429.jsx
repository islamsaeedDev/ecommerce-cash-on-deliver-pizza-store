import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="uppcase bg-fuchsia-500">
      <Link className="tracking-[5px]" to="/">
        Fast Pizza
      </Link>
      {/* <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order/new">Order pizzas</Link>
      <Link to="/order">Orders</Link> */}
      <SearchOrder />
      <p>islam</p>
    </header>
  );
}

export default Header;
