import React from "react";
import { Link } from "react-router-dom";

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">
          Your Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <p>
              Add some delicious food to your cart.
            </p>

            <Link
              to="/restaurants"
              className="browse-button"
            >
              Browse Restaurants
            </Link>
          </div>
        ) : (
          <div className="cart-section">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-food-image">
                    {item.image}
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <p>₹{item.price}</p>

                    <div className="quantity">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <p>
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      className="remove-button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Bill Details</h2>

              <div className="bill-row">
                <span>Item Total</span>
                <span>₹{total}</span>
              </div>

              <div className="bill-row">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>

              <div className="bill-row">
                <span>Platform Fee</span>
                <span>₹5</span>
              </div>

              <hr />

              <div className="bill-total">
                <strong>Total</strong>
                <strong>₹{total + 45}</strong>
              </div>

              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;