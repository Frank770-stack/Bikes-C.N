import React from "react";
import "../Pages/CSS/ShopPages.css";
import bikeImage1 from "../Assets/Gravel1.jpg";
import bikeImage2 from "../Assets/Gravel2.jpg";
import bikeImage3 from "../Assets/Gravel3.jpg";
import bikeImage4 from "../Assets/Gravel4.jpg";
import bikeImage5 from "../Assets/Gravel5.jpg";
import bikeImage6 from "../Assets/Gravel6.jpg";
import bikeImage7 from "../Assets/Gravel7.jpg";
import bikeImage8 from "../Assets/Gravel8.jpg";
import bikeImage9 from "../Assets/Gravel9.jpg";
import bikeImage10 from "../Assets/Gravel10.jpg";
import bikeImage11 from "../Assets/hero2.jpg";
import bikeImage12 from "../Assets/Shophero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useCart } from "../Context/Cartcontext"; // Import cart context

const Road = () => {
  const { addToCart, getCartItemCount } = useCart(); // Use cart functions

  const bikeDetails = [
    {
      id: 55,
      image: bikeImage1,
      name: "Speedster 3000",
      price: 899,
      description: "A lightweight road bike perfect for long-distance rides.",
    },
    {
      id: 56,
      image: bikeImage2,
      name: "Endurance Pro",
      price: 1299,
      description:
        "Built for comfort and performance, ideal for endurance cyclists.",
    },
    {
      id: 57,
      image: bikeImage3,
      name: "RaceMaster",
      price: 1799,
      description: "High-performance road bike for competitive cyclists.",
    },
    {
      id: 58,
      image: bikeImage4,
      name: "TurboSpeed",
      price: 1599,
      description: "Aerodynamic design for maximum speed and control.",
    },
    {
      id: 59,
      image: bikeImage5,
      name: "Urban Explorer",
      price: 799,
      description: "Perfect for city rides with a sleek and durable design.",
    },
    {
      id: 60,
      image: bikeImage6,
      name: "Mountain X",
      price: 999,
      description:
        "Versatile road bike with rugged tires for off-road exploration.",
    },
    {
      id: 61,
      image: bikeImage7,
      name: "Pro Tour",
      price: 2199,
      description: "Top-tier road bike with cutting-edge technology for pros.",
    },
    {
      id: 62,
      image: bikeImage8,
      name: "City Cruiser",
      price: 649,
      description: "Comfortable and stylish bike for daily city commuting.",
    },
    {
      id: 63,
      image: bikeImage9,
      name: "Cyclone 500",
      price: 1399,
      description: "Powerful bike with advanced gearing system for speed.",
    },
    {
      id: 64,
      image: bikeImage10,
      name: "Velocity R",
      price: 999,
      description:
        "Fast, responsive, and lightweight, perfect for competitive racing.",
    },
    {
      id: 65,
      image: bikeImage11,
      name: "Rider's Choice",
      price: 1099,
      description: "Well-balanced bike for cyclists of all skill levels.",
    },
    {
      id: 66,
      image: bikeImage12,
      name: "SpeedCruiser",
      price: 1499,
      description: "Cruise the streets with ease and style on this speedster.",
    },
  ];

  // Helper function to format price
  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <div className="road-bikes-container">
      <div className="header">
        <h2 className="header-text">Explore Our Premium Road Bikes</h2>
        <NavLink to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <span>{getCartItemCount()}</span>
        </NavLink>
      </div>

      <div className="bike-gallery">
        {bikeDetails.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.image} alt={bike.name} className="bike-image" />
            <div className="bike-info">
              <h3 className="bike-name">{bike.name}</h3>
              <p className="bike-price">{formatPrice(bike.price)}</p>
              <p className="bike-description">{bike.description}</p>
            </div>
            <div className="overlay">
              <button
                className="add-to-cart"
                onClick={() => addToCart(bike)} // Add to cart functionality
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Road;
