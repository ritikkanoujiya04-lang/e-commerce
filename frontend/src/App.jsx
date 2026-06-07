import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ToastContainer }
  from "react-toastify";

import Layout
  from "./layout/Layout";

import Home
  from "./pages/Home";

import Shop
  from "./pages/Shop";

import Categories
  from "./pages/Categories";

import Deals
  from "./pages/Deals";

import Contact
  from "./pages/Contact";

import Search
  from "./pages/Search";

import ProductDetails
  from "./pages/ProductDetails";

import Cart
  from "./pages/Cart";

import Login
  from "./pages/Login";

import Help
  from "./pages/Help";

import Privacy
  from "./pages/Privacy";

import Terms
  from "./pages/Terms";

import Checkout
  from "./pages/Checkout";

import Admin
  from "./pages/Admin"

  import ProtectedRoute from "./components/protected/ProtectedRoutes";

import Register from "./pages/Register";

import MyOrders from "./pages/MyOrders";


function App() {

  return (

    <BrowserRouter>

      <ToastContainer />

      <Routes>

        <Route
          path="/"
          element={<Layout />}
        >

          {/* HOME */}

          <Route
            index
            element={<Home />}
          />

          {/* SHOP */}

          <Route
            path="shop"
            element={<Shop />}
          />

          {/* CATEGORIES */}

          <Route
            path="categories"
            element={<Categories />}
          />

          {/* DEALS */}

          <Route
            path="deals"
            element={<Deals />}
          />

          {/* CONTACT */}

          <Route
            path="contact"
            element={<Contact />}
          />

          {/* SEARCH */}

          <Route
            path="search"
            element={<Search />}
          />

          {/* PRODUCT DETAILS */}

          <Route
            path="product/:id"
            element={
              <ProductDetails />
            }
          />

          {/* CART */}

          <Route
            path="cart"
            element={<Cart />}
          />

          {/* LOGIN */}

          <Route
            path="login"
            element={<Login />}
          />

          {/* HELP */}

          <Route
            path="help"
            element={<Help />}
          />

          {/* PRIVACY */}

          <Route
            path="privacy"
            element={<Privacy />}
          />

          {/* TERMS */}

          <Route
            path="terms"
            element={<Terms />}
          />

          {/* CHECKOUT */}

          <Route
            path="checkout"
            element={<Checkout />}
          />

         <Route
  path="/admin"
  element={
    <ProtectedRoute>

      <Admin />

    </ProtectedRoute>
  }
/>
          <Route
            path="/register"
            element={<Register />}
          />


          <Route
  path="/my-orders"
  element={<MyOrders />}
/>
        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;