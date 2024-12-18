import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Context/Cartcontext"; // Adjust the path
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu toggle
  const { getCartItemCount } = useCart(); // Access the cart item count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">The Cycling Network</Link>
      </div>
      <div className="cart-icon-container">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <span className="cart-count">{getCartItemCount()}</span>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
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
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
