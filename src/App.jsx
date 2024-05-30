import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/Cart";
import Product from "./components/Product";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My Shopping Cart</h1>
        <Product id={Math.random()} name="Product 1" />
        <Product id={Math.random()} name="Product 2" />
        <Product id={Math.random()} name="Product 3" />
        <Product id={Math.random()} name="Product 4" />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
