import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalQuantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            <div>{item.title}</div>
                <div>{item.description}</div>
            <div>Price: ${item.price.toFixed(2)}</div>
            <div>
              Quantity:
              <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
              {item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total Quantity: {totalQuantity}</span>
        <span>Total Price: ${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;