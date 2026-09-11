import React from "react"
import { useParams } from "react-router-dom"
import FoodCard from "../components/FoodCard"

const restaurantMenus = {
  1: {
    name: "Paradise Biryani",
    rating: 4.5,
    location: "Hitech City",
    food: [
      {
        id: 101,
        name: "Chicken Biryani",
        price: 299,
        description:
          "Delicious aromatic chicken biryani.",
        image: "🍛"
      },
      {
        id: 102,
        name: "Mutton Biryani",
        price: 349,
        description:
          "Rich and flavorful mutton biryani.",
        image: "🍛"
      },
      {
        id: 103,
        name: "Veg Biryani",
        price: 199,
        description:
          "Fresh vegetables with fragrant rice.",
        image: "🥘"
      }
    ]
  },

  2: {
    name: "Pizza Palace",
    rating: 4.3,
    location: "Madhapur",
    food: [
      {
        id: 201,
        name: "Margherita Pizza",
        price: 249,
        description:
          "Classic cheese and tomato pizza.",
        image: "🍕"
      },
      {
        id: 202,
        name: "Farmhouse Pizza",
        price: 329,
        description:
          "Loaded with fresh vegetables.",
        image: "🍕"
      },
      {
        id: 203,
        name: "Paneer Pizza",
        price: 299,
        description:
          "Paneer with delicious pizza toppings.",
        image: "🍕"
      }
    ]
  },

  3: {
    name: "Burger House",
    rating: 4.2,
    location: "Kukatpally",
    food: [
      {
        id: 301,
        name: "Classic Burger",
        price: 149,
        description:
          "Juicy patty with fresh vegetables.",
        image: "🍔"
      },
      {
        id: 302,
        name: "Cheese Burger",
        price: 179,
        description:
          "Classic burger with extra cheese.",
        image: "🍔"
      },
      {
        id: 303,
        name: "Veg Burger",
        price: 129,
        description:
          "Crispy vegetable patty burger.",
        image: "🍔"
      }
    ]
  },

  4: {
    name: "South Spice",
    rating: 4.6,
    location: "Banjara Hills",
    food: [
      {
        id: 401,
        name: "Masala Dosa",
        price: 120,
        description:
          "Crispy dosa with potato masala.",
        image: "🥞"
      },
      {
        id: 402,
        name: "Idli Sambar",
        price: 90,
        description:
          "Soft idlis served with sambar.",
        image: "🥣"
      },
      {
        id: 403,
        name: "Vada",
        price: 80,
        description:
          "Crispy South Indian medu vada.",
        image: "🍩"
      }
    ]
  },

  5: {
    name: "Dragon Chinese",
    rating: 4.1,
    location: "Ameerpet",
    food: [
      {
        id: 501,
        name: "Veg Noodles",
        price: 180,
        description:
          "Chinese noodles with fresh vegetables.",
        image: "🍜"
      },
      {
        id: 502,
        name: "Chicken Fried Rice",
        price: 220,
        description:
          "Fried rice with chicken and vegetables.",
        image: "🍚"
      }
    ]
  },

  6: {
    name: "Tasty Treats",
    rating: 4.4,
    location: "Jubilee Hills",
    food: [
      {
        id: 601,
        name: "Chocolate Cake",
        price: 180,
        description:
          "Soft and delicious chocolate cake.",
        image: "🍰"
      },
      {
        id: 602,
        name: "Ice Cream",
        price: 120,
        description:
          "Creamy vanilla ice cream.",
        image: "🍨"
      }
    ]
  }
};

function RestaurantDetails({ addToCart }) {
  const { id } = useParams();

  const restaurant = restaurantMenus[id];

  if (!restaurant) {
    return (
      <main className="page">
        <h1>Restaurant not found</h1>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container">
        <div className="restaurant-header">
          <h1>{restaurant.name}</h1>

          <p>
            ⭐ {restaurant.rating} · 📍{" "}
            {restaurant.location}
          </p>
        </div>

        <h2 className="menu-title">
          Recommended
        </h2>

        <div className="food-container">
          {restaurant.food.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default RestaurantDetails