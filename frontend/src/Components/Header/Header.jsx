import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">The Cycling Network</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/road">Road</Link>
        <Link to="/gravel">Gravel</Link>
        <Link to="/electric">Electric</Link>
        <Link to="/kids">Kids</Link>
        <Link to="/shop">Our Shop</Link>
      </nav>
    </header>
  );
}

export default Header;
