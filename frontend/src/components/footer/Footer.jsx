import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* BOX 1 */}

        <div className="footer-box">

          <h2>ShopVerse</h2>

          <p>
            Your trusted ecommerce destination
            for premium fashion, electronics,
            and trending products.
          </p>

        </div>

        {/* BOX 2 */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/shop">
            Shop
          </Link>

          <Link to="/categories">
            Categories
          </Link>

          <Link to="/deals">
            Deals
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        {/* BOX 3 */}

        <div className="footer-box">

          <h3>Support</h3>

          <Link to="/help">
            Help Center
          </Link>

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

        </div>

        {/* BOX 4 */}

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaTwitter />

            <FaYoutube />

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 ShopVerse.
          All Rights Reserved.
        </p>

      </div>

    </footer>

  );
};

export default Footer;