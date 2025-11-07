import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order/new">Order pizzas</Link>
      <Link to="/order">Orders</Link>
    </header>
  );
}

export default Header;
