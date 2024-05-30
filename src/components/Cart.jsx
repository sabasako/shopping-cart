import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
