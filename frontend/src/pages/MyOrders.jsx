import "./MyOrders.css";

import { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../config"; // ✔️ IMPORTANT ADD

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/orders/user/${user.email}` // ✔️ FIXED HERE
        );

        setOrders(res.data);
      } catch (err) {
        console.log("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <section className="my-orders">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h2>No Orders Found</h2>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-card">
            <h3>Order ID: {order._id}</h3>

            <p>Name: {order.name}</p>
            <p>City: {order.city}</p>
            <p>Payment: {order.payment}</p>
            <p>Total: ₹{order.totalPrice}</p>

            <h4>Products</h4>

            {order.products?.map((item, index) => (
              <p key={index}>
                {item.title} x {item.quantity}
              </p>
            ))}
          </div>
        ))
      )}
    </section>
  );
};

export default MyOrders;