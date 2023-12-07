import CartWidget from "./CartWidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="navbar">
      <h1>Primer eCommerce</h1>
      <ul>
        <li>
          <a href="#">Auriculares</a>
        </li>
        <li>
          <a href="#">Teclados</a>
        </li>
        <li>
          <a href="#">Mouse</a>
        </li>
        <li>
          <a href="#">Pc</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
