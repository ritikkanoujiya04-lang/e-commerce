import "./Products.css";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import {
  useContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";

import { CartContext } from "../../context/CartContext";

const Products = () => {

  const { addToCart } =
    useContext(CartContext);

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/products"
      )
      .then((res) => {

        setProducts(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <section className="products">

      <div className="products-top">

        <h1>Trending Products</h1>

        <p>
          Explore our latest premium collection.
        </p>

      </div>

      <div className="product-container">

        {
          products.map((item) => (

            <Link
              to={`/product/${item._id}`}
              className="product-link"
              key={item._id}
            >

              <div className="product-card">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="product-info">

                  <h3>{item.title}</h3>

                  <p>₹{item.price}</p>

                  <button
                    onClick={(e) => {

                      e.preventDefault();

                      addToCart(item);

                      toast.success(
                        "Product Added To Cart ✅"
                      );

                    }}
                  >

                    Add To Cart

                  </button>

                </div>

              </div>

            </Link>

          ))
        }

      </div>

    </section>

  );
};

export default Products;