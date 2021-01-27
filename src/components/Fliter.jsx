import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct, sortProduct } from "../reduks/product/actions";

const Fliter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  const products = state.products;
  return (
    <div className="filter">
      <div className="filter-result">
        {products && products.length} Products{" "}
      </div>
      <div className="filter-sort">
        Order{" "}
        <select name="" id="" onChange={(e) => dispatch(sortProduct(e))}>
          <option value="">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{" "}
        <select name="" id="" onChange={(e) => dispatch(filterProduct(e))}>
          <option value="">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option>
        </select>
      </div>
    </div>
  );
};

export default Fliter;
