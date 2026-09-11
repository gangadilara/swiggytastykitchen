import React, { useState } from "react"
import SearchBar from "../components/SearchBar"
import CategoryCard from "../components/CategoryCard"
import RestaurantCard from "../components/RestaurantCard"

const categories = [
  { id: 1, name: "Pizza", image: "🍕" },
  { id: 2, name: "Burger", image: "🍔" },
  { id: 3, name: "Biryani", image: "🍛" },
  { id: 4, name: "Chinese", image: "🥡" },
  { id: 5, name: "South Indian", image: "🥞" },
  { id: 6, name: "Desserts", image: "🍰" },
  { id: 7, name: "Ice Cream", image: "🍨" },
  { id: 8, name: "Healthy", image: "🥗" }
];

const restaurants = [
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
    name: "Chai Point",
    rating: 4.4,
    food: "Tea, Snacks",
    location: "Gachibowli",
    time: 15,
    image: "☕"
  },
  {
    id: 5,
    name: "South Spice",
    rating: 4.6,
    food: "South Indian",
    location: "Banjara Hills",
    time: 30,
    image: "🥞"
  },
  {
    id: 6,
    name: "Dragon Chinese",
    rating: 4.1,
    food: "Chinese, Asian",
    location: "Ameerpet",
    time: 35,
    image: "🥡"
  }
];

function Home() {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurants);

  const handleSearch = (searchText) => {
    const search = searchText.toLowerCase()

    const result = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(search) ||
        restaurant.food.toLowerCase().includes(search)
    );

    setFilteredRestaurants(result)
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Order food from your favourite restaurants 🍴
          </h1>

          <p>
            Delicious meals delivered quickly to your doorstep.
          </p>

          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">
          What's on your mind?
        </h2>

        <div className="category-container">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">
          Top restaurant chains
        </h2>

        <div className="restaurant-container">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          ) : (
            <p className="no-results">
              No restaurants found.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home