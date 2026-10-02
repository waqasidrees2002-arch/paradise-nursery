import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";
import { ShoppingCart, Trash2 } from "lucide-react";

function CartNavbar() {
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

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout Coming Soon!");
  };

  return (
    <>
      <CartNavbar />

      <main className="cart-page">
        <div className="cart-heading">
          <h1>Shopping Cart</h1>
          <p>{totalItems} item(s) in your cart</p>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart size={70} />

            <h2>Your cart is empty</h2>

            <p>
              Add some beautiful plants to your cart.
            </p>

            <Link
              to="/plants"
              className="continue-button"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <p>
                      Unit Price: $
                      {item.price.toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item.id)
                          )
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(
                            increaseQuantity(item.id)
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="item-total">
                    <strong>
                      $
                      {(
                        item.price * item.quantity
                      ).toFixed(2)}
                    </strong>

                    <button
                      className="delete-button"
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row">
                <span>Total Amount</span>
                <strong>
                  ${totalAmount.toFixed(2)}
                </strong>
              </div>

              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <Link
                to="/plants"
                className="continue-button"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}

export default CartItem;
