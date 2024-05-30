import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Product = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => dispatch(addItem({ id: Math.random(), name }))}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
