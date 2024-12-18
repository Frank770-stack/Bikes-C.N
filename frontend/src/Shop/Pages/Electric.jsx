import React from "react";
import "../Pages/CSS/ShopPages.css";
import { NavLink } from "react-router-dom";
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
import Footer from "../Components/Footer/Footer";
import { useCart } from "../Context/Cartcontext"; // Import useCart

const Electric = () => {
  const { addToCart, getCartItemCount } = useCart(); // Destructure addToCart from the context

  const bikeDetails = [
    {
      id: 19,
      name: "E-Power 5000",
      price: 2499, // Store price as a number
      description:
        "The E-Power 5000 is a high-performance electric bike designed for speed and efficiency with a powerful motor.",
      image: bikeImage1,
    },
    {
      id: 20,
      name: "VoltX 600",
      price: 1799, // Store price as a number
      description:
        "VoltX 600 features a sleek design with a mid-drive motor and long-lasting battery for an amazing riding experience.",
      image: bikeImage2,
    },
    {
      id: 21,
      name: "TurboRide",
      price: 2199, // Store price as a number
      description:
        "TurboRide combines modern e-bike technology with a comfortable frame to make long rides effortless.",
      image: bikeImage3,
    },
    {
      id: 22,
      name: "CityVolt 300",
      price: 1299, // Store price as a number
      description:
        "Perfect for city commuting, the CityVolt 300 is a compact e-bike with excellent battery life and smooth handling.",
      image: bikeImage4,
    },
    {
      id: 23,
      name: "PowerCruiser",
      price: 2699, // Store price as a number
      description:
        "PowerCruiser offers a stylish design and powerful motor for smooth, fast rides on urban roads.",
      image: bikeImage5,
    },
    {
      id: 24,
      name: "EcoRide 1000",
      price: 1499, // Store price as a number
      description:
        "EcoRide 1000 is the eco-friendly e-bike for city commuting with a low environmental footprint.",
      image: bikeImage6,
    },
    {
      id: 25,
      name: "CityE-Commute",
      price: 2299, // Store price as a number
      description:
        "Designed for daily urban commuting, the CityE-Commute offers comfort, power, and style in one e-bike.",
      image: bikeImage7,
    },
    {
      id: 26,
      name: "VoltMaster",
      price: 2499, // Store price as a number
      description:
        "VoltMaster combines a high-performance motor and modern technology for a smooth ride on any terrain.",
      image: bikeImage8,
    },
    {
      id: 27,
      name: "E-Cruiser Pro",
      price: 2799, // Store price as a number
      description:
        "E-Cruiser Pro is a premium e-bike designed for long-distance riders with advanced motor support and top-tier components.",
      image: bikeImage9,
    },
    {
      id: 28,
      name: "UrbanX 500",
      price: 1899, // Store price as a number
      description:
        "The UrbanX 500 is built for quick, efficient rides around the city with a lightweight frame and strong motor.",
      image: bikeImage10,
    },
    {
      id: 29,
      name: "VoltRider",
      price: 2199, // Store price as a number
      description:
        "VoltRider is a robust e-bike perfect for both urban roads and light off-road trails with great battery efficiency.",
      image: bikeImage11,
    },
    {
      id: 30,
      name: "E-Explorer 1000",
      price: 2499, // Store price as a number
      description:
        "The E-Explorer 1000 is designed for those who love to explore off-road terrains with power assistance.",
      image: bikeImage12,
    },
  ];

  // Helper function to format price with currency symbol
  const formatPrice = (price) => {
    const numericPrice = typeof price === "string" ? parseFloat(price) : price; // Convert string to number if necessary
    if (isNaN(numericPrice)) {
      return "$0.00"; // Return a default value if the price is not a valid number
    }
    return `$${numericPrice.toFixed(2)}`; // Format the price with 2 decimal places
  };

  return (
    <div className="road-bikes-container">
      <div className="header">
        <h2 className="header-text">Explore Our Premium Electric Bikes</h2>
        <NavLink to="/cart" className="cart-link">
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{getCartItemCount()}</span>
          </div>
        </NavLink>
      </div>

      <div className="bike-gallery">
        {bikeDetails.map((bike) => (
          <div className="bike-card" key={bike.id}>
            <img src={bike.image} alt={bike.name} className="bike-image" />
            <div className="bike-info">
              <h3 className="bike-name">{bike.name}</h3>
              <p className="bike-price">Price: {formatPrice(bike.price)}</p>
              <p className="bike-description">{bike.description}</p>
            </div>
            <div className="overlay">
              <button className="add-to-cart" onClick={() => addToCart(bike)}>
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

export default Electric;
