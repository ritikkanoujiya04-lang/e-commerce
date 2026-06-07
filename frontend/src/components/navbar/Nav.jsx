import "./Nav.css";

import { Link, useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useState, useContext } from "react";

import { CartContext } from "../../context/CartContext";

const Nav = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const { cartItems } =
    useContext(CartContext);

  const navigate =
    useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    setMenuOpen(false);

    navigate("/login");

  };

  const closeMenu = () => {

    setMenuOpen(false);

  };

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >

        ShopVerse

      </Link>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

        </li>

        <li>

          <Link
            to="/shop"
            onClick={closeMenu}
          >
            Shop
          </Link>

        </li>

        <li>

          <Link
            to="/categories"
            onClick={closeMenu}
          >
            Categories
          </Link>

        </li>

        <li>

          <Link
            to="/deals"
            onClick={closeMenu}
          >
            Deals
          </Link>

        </li>

        <li>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

        </li>

      </ul>

      <div className="nav-icons">

        <Link
          to="/search"
          onClick={closeMenu}
        >

          <FaSearch className="icon" />

        </Link>

        <Link
          to="/cart"
          className="cart-icon"
          onClick={closeMenu}
        >

          <FaShoppingCart
            className="icon"
          />

          <span className="cart-count">

            {cartItems.length}

          </span>

        </Link>

        {user ? (

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >

            <span
              style={{
                color: "white",
                fontWeight: "600",
              }}
            >

              {user.name}

            </span>

            <button
              className="login-btn"
              onClick={handleLogout}
            >

              Logout

            </button>

          </div>

        ) : (

          <Link
            to="/login"
            onClick={closeMenu}
          >

            <button className="login-btn">

              Login

            </button>

          </Link>

        )}

      </div>

      <div
        className="menu-toggle"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {
          menuOpen
            ? <FaTimes />
            : <FaBars />
        }

      </div>

    </nav>

  );

};

export default Nav;