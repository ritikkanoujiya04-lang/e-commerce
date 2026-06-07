import {
  createContext,
  useState,
} from "react";

export const CartContext =
  createContext();

const CartProvider = ({
  children
}) => {

  const [cartItems, setCartItems] =
    useState([]);

  const addToCart = (product) => {

    const existingProduct =
      cartItems.find(
        (item) =>
          item._id === product._id
      );

    if (existingProduct) {

      const updatedCart =
        cartItems.map((item) =>

          item._id === product._id

            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }

            : item
        );

      setCartItems(updatedCart);

    } else {

      setCartItems([

        ...cartItems,

        {
          ...product,
          quantity:
            product.quantity || 1,
        },

      ]);

    }

  };

  const removeFromCart = (id) => {

    const updatedCart =
      cartItems.filter(
        (item) =>
          item._id !== id
      );

    setCartItems(updatedCart);

  };

  const increaseQuantity = (id) => {

    const updatedCart =
      cartItems.map((item) =>

        item._id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }

          : item
      );

    setCartItems(updatedCart);

  };

  const decreaseQuantity = (id) => {

    const updatedCart =
      cartItems
        .map((item) =>

          item._id === id

            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }

            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        );

    setCartItems(updatedCart);

  };

  const clearCart = () => {

    setCartItems([]);

  };

  return (

    <CartContext.Provider
      value={{

        cartItems,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        clearCart,

      }}
    >

      {children}

    </CartContext.Provider>

  );

};

export default CartProvider;