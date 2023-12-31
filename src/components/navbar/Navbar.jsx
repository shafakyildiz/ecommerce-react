import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import cart_icon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cartCount } = useContext(ShopContext);
  const location = useLocation();
  let path = location.pathname;

  useEffect(() => {
    setMenu(path.substring(1, path.length));
  }, [path]);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <img src={logo} alt="Navbar logo" className="logo-img" />
          <p>Shopio</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">
            Shop
            {(menu === "shop" || menu === "") && <hr />}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">
            Men
            {menu === "men" && <hr />}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">
            Women
            {menu === "women" && <hr />}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link to="/kid">
            Kids
            {menu === "kid" && <hr />}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" className="cart-img" />
        </Link>

        <div className="nav-cart-count">{cartCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
