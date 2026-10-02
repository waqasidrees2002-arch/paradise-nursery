import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p className="tagline">
            Bring Nature Into Your Home
          </p>

          <p className="description">
            Discover beautiful, healthy houseplants and
            transform your living space into a peaceful
            green paradise.
          </p>

          <Link
            to="/plants"
            className="get-started-button"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/plants"
          element={<ProductList />}
        />

        <Route
          path="/cart"
          element={<CartItem />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
