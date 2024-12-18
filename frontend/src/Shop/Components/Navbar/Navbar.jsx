import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Context/Cartcontext"; // Adjust the path
import "./Navbar.css";

const Navbar = () => {
  const { getCartItemCount } = useCart(); // Access the cart item count

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">The Cycling Network</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop/roadbikes">Road Bikes</Link>
        </li>
        <li>
          <Link to="/shop/gravelbikes">Gravel Bikes</Link>
        </li>
        <li>
          <Link to="/shop/electricbikes">Electric Bikes</Link>
        </li>
        <li>
          <Link to="/shop/kidsbikes">Kids Bikes</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="cart-icon-container">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              <span className="cart-count">{getCartItemCount()}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
