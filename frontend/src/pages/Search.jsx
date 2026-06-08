import "./Search.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { BASE_URL } from "../config"; // ✔️ IMPORTANT ADD

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/products` // ✔️ FIXED HERE
        );

        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Error:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading Products...</h1>
      </div>
    );
  }

  return (
    <section className="search-page">
      <div className="search-top">
        <h1>Search Products</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="search-products">
        {filteredProducts.length === 0 ? (
          <h2>No Products Found 😢</h2>
        ) : (
          filteredProducts.map((item) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id}
              className="search-card"
            >
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=No+Image";
                }}
              />

              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Search;