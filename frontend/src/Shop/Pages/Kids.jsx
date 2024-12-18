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

const Kids = () => {
  const { addToCart, getCartItemCount } = useCart(); // Use cart functions

  const bikeDetails = [
    {
      id: 43,
      name: "Mini Racer 200",
      price: 299, // Price stored as a number
      description:
        "A fun, colorful bike designed for young riders with easy-to-use features and a lightweight frame.",
      image: bikeImage1,
    },
    {
      id: 44,
      name: "Adventure Jr. 300",
      price: 349,
      description:
        "Adventure Jr. 300 is perfect for your child's first off-road experience with training wheels and a durable frame.",
      image: bikeImage2,
    },
    {
      id: 45,
      name: "Zoomer 400",
      price: 379,
      description:
        "The Zoomer 400 offers comfort and stability for young riders, designed for both street and light trail use.",
      image: bikeImage3,
    },
    {
      id: 46,
      name: "Explorer Kids 500",
      price: 429,
      description:
        "The Explorer Kids 500 is a versatile bike with a suspension fork and knobby tires for adventurous rides.",
      image: bikeImage4,
    },
    {
      id: 47,
      name: "Little Cruiser",
      price: 279,
      description:
        "Perfect for the little one, this cruiser bike offers comfort, style, and ease for kids starting to ride.",
      image: bikeImage5,
    },
    {
      id: 48,
      name: "Speedster Jr.",
      price: 359,
      description:
        "The Speedster Jr. combines speed and stability for children who want to go fast and have fun.",
      image: bikeImage6,
    },
    {
      id: 49,
      name: "CycloMax 300",
      price: 329,
      description:
        "CycloMax 300 offers excellent stability and durability for kids riding on both paved and dirt roads.",
      image: bikeImage7,
    },
    {
      id: 50,
      name: "TurboTrike 100",
      price: 199,
      description:
        "The TurboTrike 100 is designed for younger kids who are just learning to ride, with extra safety features.",
      image: bikeImage8,
    },
    {
      id: 51,
      name: "RacerX Jr.",
      price: 359,
      description:
        "RacerX Jr. is designed for kids who want to race, featuring lightweight frames and easy-to-use gears.",
      image: bikeImage9,
    },
    {
      id: 52,
      name: "Adventure Rider 200",
      price: 319,
      description:
        "The Adventure Rider 200 is built for young explorers who love both off-road and street adventures.",
      image: bikeImage10,
    },
    {
      id: 53,
      name: "Little TrailBlazer",
      price: 299,
      description:
        "Perfect for little adventurers, the Little TrailBlazer features knobby tires for all-terrain fun.",
      image: bikeImage11,
    },
    {
      id: 54,
      name: "ZoomerX Kids",
      price: 369,
      description:
        "ZoomerX Kids offers a perfect balance of speed, safety, and fun for children looking for a thrilling ride.",
      image: bikeImage12,
    },
  ];

  // Helper function to format price
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="road-bikes-container">
      <div className="header">
        <h2 className="header-text">Explore Our Premium Kids Bikes</h2>
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
                onClick={() => addToCart(bike)} // Add to cart logic
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

export default Kids;
