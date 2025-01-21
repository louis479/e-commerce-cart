import React from "react";

function Cart({ cart, updateCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name} - ${item.price}</span>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateCart(item.id, parseInt(e.target.value, 10))
                }
              />
              <button onClick={() => updateCart(item.id, 0)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
