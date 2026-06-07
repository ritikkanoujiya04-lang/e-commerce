import "./Cart.css";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { Link } from "react-router-dom";

const Cart = () => {

  const {
    cartItems,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total +
      (Number(item.price) * item.quantity),

    0

  );

  return (

    <section className="cart">

      <h1>Your Shopping Cart</h1>

      <div className="cart-container">

        {

          cartItems.length === 0 ? (

            <h2 className="empty-cart">

              Cart is Empty

            </h2>

          ) : (

            cartItems.map((item) => (

              <div
                className="cart-item"
                key={item._id}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="cart-content">

                  <h2>{item.title}</h2>

                  <p>
                    ₹{item.price}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <button
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                  >

                    Remove

                  </button>

                </div>

              </div>

            ))

          )

        }

      </div>

      {

        cartItems.length > 0 && (

          <div className="cart-total">

            <h2>

              Total: ₹{totalPrice}

            </h2>

            <Link to="/checkout">

              <button className="checkout-btn">

                Proceed To Checkout

              </button>

            </Link>

          </div>

        )

      }

    </section>

  );

};

export default Cart;