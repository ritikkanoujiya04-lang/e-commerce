import "./Checkout.css";

import { useState, useContext } from "react";

import axios from "axios";

import { toast } from "react-toastify";

import { CartContext } from "../context/CartContext";

const Checkout = () => {

  const {
    cartItems,
    clearCart,
  } = useContext(CartContext);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      payment:
        "Cash On Delivery",
    });

  const totalPrice = cartItems.reduce(

    (total, item) =>

      total +
      (Number(item.price) * item.quantity),

    0

  );

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await axios.post(
          "http://localhost:5000/api/orders",
          {
            ...formData,
            products: cartItems,
            totalPrice,
          }
        );

        toast.success(
          "Order Placed Successfully ✅"
        );

        clearCart();

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          payment:
            "Cash On Delivery",
        });

      } catch (error) {

        toast.error(
          "Order Failed ❌"
        );

      }

    };

  return (

    <section className="checkout">

      <div className="checkout-container">

        <h1>Checkout</h1>

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
          >

            <option>
              Cash On Delivery
            </option>

            <option>
              UPI Payment
            </option>

            <option>
              Credit / Debit Card
            </option>

          </select>

          <div className="order-summary">

            <h2>Order Summary</h2>

            {

              cartItems.length === 0 ? (

                <p>Cart is Empty</p>

              ) : (

                cartItems.map((item) => (

                  <p key={item._id}>

                    {item.title}
                    {" "}
                    ×
                    {" "}
                    {item.quantity}

                  </p>

                ))

              )

            }

            <h3>

              Total: ₹{totalPrice}

            </h3>

          </div>

          <button
            type="submit"
            disabled={
              cartItems.length === 0
            }
          >

            Place Order

          </button>

        </form>

      </div>

    </section>

  );
};

export default Checkout;