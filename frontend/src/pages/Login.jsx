import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config"; // ✔️ ADD THIS

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${BASE_URL}/api/auth/login`, // ✔️ FIXED HERE
        user
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login Successful ✅");
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed ❌"
      );
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>Welcome Back</h1>
          <p>Login to continue shopping with ShopVerse.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

          <p className="signup-text">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;