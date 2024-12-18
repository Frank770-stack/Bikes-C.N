import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="shop-footer">
      <div className="shop-footer-content">
        <div className="shop-footer-section">
          <h3>Location</h3>
          <p>123 Bicycle St., Bike City, BC 12345</p>
        </div>
        <div className="shop-footer-section">
          <h3>Contact</h3>
          <p>Email: info@bicyclestore.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="shop-footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="shop-footer-bottom">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
