import "./Admin.css";

import {
  useState,
  useEffect,
} from "react";

import axios from "axios";

import { toast } from "react-toastify";

const Admin = () => {

  const [product, setProduct] =
    useState({
      title: "",
      price: "",
      image: "",
      description: "",
      category: "",
    });

  const [products, setProducts] =
    useState([]);

  const [editId, setEditId] =
    useState(null);

  const fetchProducts =
    async () => {

      try {

        const res =
          await axios.get(
            "http://localhost:5000/api/products"
          );

        setProducts(res.data);

      } catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    fetchProducts();

  }, []);

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        if (editId) {

          await axios.put(
            `http://localhost:5000/api/products/${editId}`,
            product
          );

          toast.success(
            "Product Updated ✅"
          );

        } else {

          await axios.post(
            "http://localhost:5000/api/products",
            product
          );

          toast.success(
            "Product Added ✅"
          );

        }

        setProduct({
          title: "",
          price: "",
          image: "",
          description: "",
          category: "",
        });

        setEditId(null);

        fetchProducts();

      } catch (error) {

        toast.error(
          "Failed ❌"
        );

      }

    };

  const deleteProduct =
    async (id) => {

      try {

        await axios.delete(
          `http://localhost:5000/api/products/${id}`
        );

        toast.success(
          "Product Deleted ✅"
        );

        fetchProducts();

      } catch (error) {

        toast.error(
          "Delete Failed ❌"
        );

      }

    };

  return (

    <section className="admin">

      <div className="admin-container">

        <h1>

          {editId
            ? "Edit Product"
            : "Add Product"}

        </h1>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={product.title}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
          ></textarea>

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
          />

          <button type="submit">

            {editId
              ? "Update Product"
              : "Add Product"}

          </button>

        </form>

        <div className="admin-products">

          <h2>
            All Products
          </h2>

          {

            products.map((item) => (

              <div
                key={item._id}
                className="admin-product"
              >

                <span>
                  {item.title}
                </span>

                <span>
                  ₹{item.price}
                </span>

                <div>

                  <button
                    onClick={() => {

                      setProduct({
                        title:
                          item.title,
                        price:
                          item.price,
                        image:
                          item.image,
                        description:
                          item.description,
                        category:
                          item.category,
                      });

                      setEditId(
                        item._id
                      );

                    }}
                  >

                    Edit

                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(
                        item._id
                      )
                    }
                  >

                    Delete

                  </button>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

};

export default Admin;