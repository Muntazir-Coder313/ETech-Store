import React, {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

export const useCart = () =>
  useContext(CartContext);

export const CartProvider = ({
  children,
}) => {

  const [cart, setCart] = useState([]);

  // ================= ADD TO CART =================
  const addToCart = (product) => {

    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

  };

  // ================= INCREASE =================
  const increaseQty = (id) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };

  // ================= DECREASE =================
  const decreaseQty = (id) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );

  };

  // ================= REMOVE =================
  const removeFromCart = (id) => {

    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };

  // ================= COUNT =================
  const cartCount = cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );

};