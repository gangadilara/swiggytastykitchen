import React from "react"
import { Link } from "react-router-dom"

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Swiggy<span>TastyKitchen</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>

        <Link to="/cart">
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;