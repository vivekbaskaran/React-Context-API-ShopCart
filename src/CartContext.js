import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [
      {
        id: 1,
        title: "WOLF SO GRIM AND MANGY",
        description: "WOLF SO GRIM AND MANGY is Kids most Searched book",
        price: 249.00,
        quantity: 1
      }
    ]
  });

  const increaseQuantity = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }));
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    }));
  };

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
