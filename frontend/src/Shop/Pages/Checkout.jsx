import "./CSS/Checkout.css";
import React from "react";
import { useCart } from "../Context/Cartcontext";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Checkout = () => {
  const { cart, getTotalPrice, getCartItemCount, clearCart } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle order confirmation
  const handleConfirmOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items to the cart before confirming.");
      return;
    }

    // Show confirmation alert
    alert("Your order has been placed!");

    // Prepare the email content
    const orderDetails = cart
      .map((item) => `${item.name} - ${item.quantity} x ${item.price}`)
      .join("\n");

    const emailContent = {
      to_name: "Your Name", // Your name
      from_name: "Customer",
      message: `A new order has been placed. Details:\n\n${orderDetails}\n\nTotal Price: ${getTotalPrice().toFixed(
        2
      )}`,
      reply_to: "customer_email@example.com", // The customer's email, if available
    };

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your service ID from EmailJS
        "YOUR_TEMPLATE_ID", // Replace with your template ID from EmailJS
        emailContent,
        "YOUR_USER_ID" // Replace with your user ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // After successfully placing the order and sending the email, redirect to the home page
          navigate("/"); // Redirect to the home page ("/")
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  if (!cart) {
    console.warn("Cart is undefined");
    return <p>Loading cart...</p>;
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="checkout-content">
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>
                  ${item.price} x {item.quantity}
                </span>
              </li>
            ))}
          </ul>
          <div className="checkout-summary">
            <h3>Total Items: {getCartItemCount()}</h3>
            <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
          </div>
          <div className="checkout-buttons">
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="confirm-order-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
