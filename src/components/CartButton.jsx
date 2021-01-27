import React from "react";
import formatCurrency from "../formatPrice";
import { useSelector } from "react-redux";

const CartButton = ({ handleOpenToggle }) => {
  const state = useSelector((state) => state.cartItem);
  const cartItem = state.cartItem;

  const totalCartItem = () => {
    const total = cartItem.reduce(
      (sum, item) => (sum += item.price * item.count),
      0
    );
    return formatCurrency(total);
  };

  return (
    <div className="cart">
      <div className="total">
        <div>Total: {totalCartItem()}</div>
        <button onClick={() => handleOpenToggle()} className="button primary">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default CartButton;
