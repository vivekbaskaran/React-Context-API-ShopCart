import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

export default App;
