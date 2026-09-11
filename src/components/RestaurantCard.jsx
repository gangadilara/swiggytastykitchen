import React from "react"
import { Link } from "react-router-dom"

function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="restaurant-card"
    >
      <div className="restaurant-image">
        {restaurant.image}
      </div>

      <div className="restaurant-content">
        <h3>{restaurant.name}</h3>

        <p className="rating">
          ⭐ {restaurant.rating}
        </p>

        <p>{restaurant.food}</p>

        <p className="location">
          📍 {restaurant.location}
        </p>

        <p>{restaurant.time} mins</p>
      </div>
    </Link>
  );
}

export default RestaurantCard;