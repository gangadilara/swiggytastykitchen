import React from "react"

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <div className="category-image">
        {category.image}
      </div>

      <h3>{category.name}</h3>
    </div>
  );
}

export default CategoryCard;