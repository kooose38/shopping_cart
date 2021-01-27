import React from "react";
import formatCurrency from "../formatPrice";
import { useDispatch } from "react-redux";
import { removeCart } from "../reduks/Cart/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li style={{ listStyle: "none" }}>
      <div>
        <img className="product-img" src={item.image} alt={item.title} />
      </div>
      <div>
        <div>{item.title}</div>
        <div className="right">
          {formatCurrency(item.price)} x {item.count}
          <button onClick={() => dispatch(removeCart(item))}>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
