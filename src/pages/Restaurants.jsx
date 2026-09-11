import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";

const restaurantData = [
  {
    id: 1,
    name: "Paradise Biryani",
    rating: 4.5,
    food: "Biryani, North Indian",
    location: "Hitech City",
    time: 30,
    image: "🍛"
  },
  {
    id: 2,
    name: "Pizza Palace",
    rating: 4.3,
    food: "Pizza, Italian",
    location: "Madhapur",
    time: 25,
    image: "🍕"
  },
  {
    id: 3,
    name: "Burger House",
    rating: 4.2,
    food: "Burgers, Fast Food",
    location: "Kukatpally",
    time: 20,
    image: "🍔"
  },
  {
    id: 4,
    name: "South Spice",
    rating: 4.6,
    food: "South Indian",
    location: "Banjara Hills",
    time: 30,
    image: "🥞"
  },
  {
    id: 5,
    name: "Dragon Chinese",
    rating: 4.1,
    food: "Chinese, Asian",
    location: "Ameerpet",
    time: 35,
    image: "🥡"
  },
  {
    id: 6,
    name: "Tasty Treats",
    rating: 4.4,
    food: "Desserts, Bakery",
    location: "Jubilee Hills",
    time: 20,
    image: "🍰"
  }
];

function Restaurants() {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurantData.filter(
    (restaurant) =>
      restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      restaurant.food
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">
          Restaurants Near You
        </h1>

        <input
          className="restaurant-search"
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="restaurant-container">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Restaurants;