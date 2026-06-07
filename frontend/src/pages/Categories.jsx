import "./Categories.css";

const Categories = () => {

  const categoryData = [

    {
      id: 1,

      title: "Fashion",

      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050",
    },

    {
      id: 2,

      title: "Electronics",

      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      id: 3,

      title: "Footwear",

      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 4,

      title: "Accessories",

      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

  ];

  return (

    <section className="categories-page">

      <div className="categories-top">

        <h1>Shop By Categories</h1>

        <p>
          Discover products from premium collections.
        </p>

      </div>

      <div className="categories-container">

        {
          categoryData.map((item) => (

            <div
              className="category-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="category-overlay">

                <h2>{item.title}</h2>

                <button>
                  Explore
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </section>
  );
};

export default Categories;