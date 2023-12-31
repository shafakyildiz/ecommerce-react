import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import "./styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const { product_data, increment, decrement } = useContext(ShopContext);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    updateTotal(updatedCart);
    increment();
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateTotal(updatedCart);
    decrement();
  };

  const updateTotal = (cart) => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  return (
    <>
      <div style={styles.cartContainer}>
        <h2>Your Cart</h2>
        <ul style={styles.cartItemsList}>
          {cartItems.map((item, index) => (
            <li key={index} style={styles.cartItem}>
              {item.name} - ${item.price}
              <button
                style={styles.removeButton}
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p style={styles.total}>Total: ${total.toFixed(2)}</p>
      </div>

      <div style={styles.availableProducts}>
        <h1>Available Products</h1>

        <div className="cart-product-container">
          {product_data.map((element) => {
            return (
              <div className="cart-item" key={element.id}>
                <img
                  src={element.image}
                  alt="Product image"
                  className="cart-image"
                />
                <button
                  style={styles.addButton}
                  onClick={() => {
                    addToCart({ name: element.name, price: element.new_price });
                    increment;
                  }}
                >
                  Add {element.name} - ${element.new_price}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const styles = {
  cartContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #ddd",
    padding: "6em",
    borderRadius: "8px",
    margin: "5% auto",
  },
  cartItemsList: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  cartItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  removeButton: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
    width: "10em",
    marginLeft: "2em",
  },
  total: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  availableProducts: {
    marginTop: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  addButton: {
    background: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "1em",
    marginBottom: "0.5em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "25em",
  },
};

export default Cart;
