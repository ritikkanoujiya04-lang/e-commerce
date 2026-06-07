import "./Deals.css";

const Deals = () => {

  const dealsData = [

    {
      id: 1,

      title: "Nike Air Max",

      discount: "50% OFF",

      price: "₹1000",

      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 2,

      title: "Smart Watch",

      discount: "35% OFF",

      price: "₹2300",

      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 3,

      title: "Gaming Headphone",

      discount: "40% OFF",

      price: "₹2100",

      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

  ];

  return (

    <section className="deals-page">

      <div className="deals-top">

        <h1>Hot Deals</h1>

        <p>
          Grab limited-time discounts on
          premium products.
        </p>

      </div>

      <div className="deals-container">

        {
          dealsData.map((item) => (

            <div
              className="deal-card"
              key={item.id}
            >

              <div className="deal-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>
                  {item.discount}
                </span>

              </div>

              <div className="deal-content">

                <h2>{item.title}</h2>

                <p>{item.price}</p>

                <button>
                  Shop Deal
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </section>
  );
};

export default Deals;