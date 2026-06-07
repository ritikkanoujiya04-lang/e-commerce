import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";


import App from "./App";

// import "./index.css";

import CartProvider from "./context/CartContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <CartProvider>

      <App />

    </CartProvider>

  </React.StrictMode>

);