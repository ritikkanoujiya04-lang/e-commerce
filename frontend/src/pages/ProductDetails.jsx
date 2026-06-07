import "./ProductDetails.css";

import { useParams } from "react-router-dom";

import {
  useContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";

import {
  CartContext
} from "../context/CartContext";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const ProductDetails = () => {

  const { id } = useParams();

  const { addToCart } =
    useContext(CartContext);

  const [quantity, setQuantity] =
    useState(1);

  const [product, setProduct] =
    useState(null);

  useEffect(() => {

    axios
      .get(
        `http://localhost:5000/api/products/${id}`
      )
      .then((res) => {

        setProduct(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, [id]);

  if (!product) {

    return (

      <div className="loading">

        <h1>

          Loading Product...

        </h1>

      </div>

    );

  }

  return (

    <section className="product-details">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {

            e.target.src =
              "https://via.placeholder.com/400x400?text=No+Image";

          }}
        />

      </div>

      <div className="product-content">

        <h1>{product.title}</h1>

        <h2>₹{product.price}</h2>

        <p>
          {product.description}
        </p>

        {/* SHOES SIZE */}

        {

          product.category === "Shoes" && (

            <div className="sizes">

              <h3>Select Size</h3>

              <div className="size-buttons">

                <button>7</button>

                <button>8</button>

                <button>9</button>

                <button>10</button>

              </div>

            </div>

          )

        }

        {/* CLOTHING SIZE */}

        {

          product.category === "Clothing" && (

            <div className="sizes">

              <h3>Select Size</h3>

              <div className="size-buttons">

                <button>S</button>

                <button>M</button>

                <button>L</button>

                <button>XL</button>

              </div>

            </div>

          )

        }

        <div className="quantity">

          <h3>Quantity</h3>

          <div className="quantity-box">

            <button
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
            >

              -

            </button>

            <span>
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >

              +

            </button>

          </div>

        </div>

        <div className="buttons">

          <button
            className="cart-btn"
            onClick={() => {

              addToCart({

                ...product,

                quantity,

              });

              toast.success(
                "Product Added To Cart ✅"
              );

            }}
          >

            Add To Cart

          </button>

          <Link to="/checkout">

            <button className="buy-btn">

              Buy Now

            </button>

          </Link>

        </div>

      </div>

    </section>

  );

};

export default ProductDetails;