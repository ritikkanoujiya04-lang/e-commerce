import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Upgrade Your Style With Modern Shopping
        </h1>

        <p>
          Discover premium fashion, electronics,
          and trending products at the best prices.
        </p>

        <div className="hero-buttons">

  <Link to="/shop">

    <button className="hero-btn">
      Shop Now
    </button>

  </Link>

  <Link to="/categories">

    <button className="hero-btn secondary-btn">
      Explore
    </button>

  </Link>

</div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="product"
        />

      </div>

    </section>
  );
};

export default Hero;