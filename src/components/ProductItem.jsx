import React from "react";
import { useDispatch } from "react-redux";
import formatCurrency from "../formatPrice";
import { addToCart } from "../reduks/Cart/actions";
import { handleOpen } from "../reduks/modal/actions";

const ProductItem = ({ setProduct, product }) => {
  const dispatch = useDispatch();
  const handleClick = (product) => {
    setProduct(product);
    dispatch(handleOpen());
  };
  return (
    <li>
      <div className="product">
        <a onClick={() => handleClick(product)}>
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
          />
          <p>{product.title}</p>
        </a>
        <div className="product-price">
          <div>{formatCurrency(product.price)}</div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="button primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
