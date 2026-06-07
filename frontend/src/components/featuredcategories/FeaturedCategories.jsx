import "./FeaturedCategories.css";

const FeaturedCategories = () => {

  const data = [
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
      title: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 4,
      title: "Watches",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 5,
      title: "Gaming",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },

    {
      id: 6,
      title: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
    },
  ];

  return (
    <section className="categories">

      <h2>
        Featured Categories
      </h2>

      <div className="category-container">

        {
          data.map((item) => (

            <div className="category-card" key={item.id}>

              <img src={item.image} alt={item.title} />

              <div className="overlay">

                <h3>{item.title}</h3>

              </div>

            </div>

          ))
        }

      </div>

    </section>
  );
};

export default FeaturedCategories;