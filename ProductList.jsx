import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 18,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 22,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 16,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 15,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Boston Fern",
    price: 20,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 25,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 7,
    name: "Monstera Deliciosa",
    price: 30,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Bird of Paradise",
    price: 35,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-a7c8b7a5c2c5?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    name: "Calathea",
    price: 24,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    name: "Philodendron",
    price: 27,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1545165375-3b2f4c8f4a4f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    name: "Areca Palm",
    price: 28,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    name: "Prayer Plant",
    price: 23,
    category: "Tropical Plants",
    image:
      "https://images.unsplash.com/photo-1597055181449-2e7c8f3f4b8c?auto=format&fit=crop&w=500&q=80"
  },

  {
    id: 13,
    name: "Jade Plant",
    price: 19,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1520302630591-fd1c66a3b0e0?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 14,
    name: "Echeveria",
    price: 14,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 15,
    name: "Haworthia",
    price: 13,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 16,
    name: "String of Pearls",
    price: 21,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1519336056116-9e2d5c2c5c8e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 17,
    name: "Zebra Haworthia",
    price: 17,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 18,
    name: "Panda Plant",
    price: 16,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80"
  }
];

function Navbar() {
  const items = useSelector((state) => state.cart.items);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>

        <Link to="/cart" className="cart-link">
          <ShoppingCart size={22} />
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    "Air Purifying Plants",
    "Tropical Plants",
    "Succulents"
  ];

  const isAdded = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <>
      <Navbar />

      <main className="products-page">
        <div className="products-header">
          <h1>Our Houseplants</h1>
          <p>
            Discover beautiful plants for a greener and healthier home.
          </p>
        </div>

        {categories.map((category) => (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>

                      <p className="category-name">
                        {plant.category}
                      </p>

                      <div className="plant-bottom">
                        <strong>
                          ${plant.price.toFixed(2)}
                        </strong>

                        <button
                          disabled={isAdded(plant.id)}
                          onClick={() =>
                            dispatch(addToCart(plant))
                          }
                          className={
                            isAdded(plant.id)
                              ? "added-button"
                              : "add-button"
                          }
                        >
                          {isAdded(plant.id)
                            ? "Added"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
