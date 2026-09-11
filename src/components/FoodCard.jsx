import React from "react"

function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <div className="food-image">
        {food.image}
      </div>

      <div className="food-content">
        <h3>{food.name}</h3>

        <p className="food-price">
          ₹{food.price}
        </p>

        <p className="food-description">
          {food.description}
        </p>

        <button
          className="add-button"
          onClick={() => addToCart(food)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default FoodCard;