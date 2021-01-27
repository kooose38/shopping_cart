import React, { useEffect } from "react";
import { Fliter, Products, Cart } from "./components/";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./reduks/product/actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Fliter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
