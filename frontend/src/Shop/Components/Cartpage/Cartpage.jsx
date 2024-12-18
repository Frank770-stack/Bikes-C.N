import React from "react";
import "./Cartpage.css";
import { useCart } from "../../Context/Cartcontext"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// Helper function to format price with currency symbol
const formatPrice = (price) => {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price; // Convert string to number if necessary
  if (isNaN(numericPrice)) {
    return "$0.00"; // Return a default value if the price is not a valid number
  }
  return `$${numericPrice.toFixed(2)}`; // Format the price with 2 decimal places
};

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } =
    useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(-1);
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: {formatPrice(item.price)}</p> {/* Format price */}
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const quantity = Number(e.target.value);
                      if (quantity > 0) {
                        updateQuantity(item.id, quantity);
                      }
                    }}
                    min="1"
                  />
                </p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: {formatPrice(getTotalPrice())}</h3>{" "}
          {/* Format total price */}
          <button onClick={clearCart}>Clear Cart</button>
          <div className="cart-actions">
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <button onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
