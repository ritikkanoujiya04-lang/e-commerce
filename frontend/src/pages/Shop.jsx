import "./Shop.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../config"; // ✔️ IMPORTANT

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products`);

        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading Products...</h1>
      </div>
    );
  }

  return (
    <section className="shop">
      <div className="shop-top">
        <h1>Our Products</h1>
        <p>
          Discover premium fashion, electronics and trending products.
        </p>
      </div>

      <div className="shop-container">
        {products.length === 0 ? (
          <h2>No Products Found 😢</h2>
        ) : (
          products.map((item) => (
            <Link
              to={`/product/${item._id}`}
              className="shop-link"
              key={item._id}
            >
              <div className="shop-card">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=No+Image";
                  }}
                />

                <div className="shop-content">
                  <h2>{item.title}</h2>
                  <p>₹{item.price}</p>

                  <button>View Product</button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Shop;