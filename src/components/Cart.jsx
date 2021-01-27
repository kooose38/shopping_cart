import React, { useState, useCallback } from "react";
import { CartItem, TextForm } from "./";
import CartButton from "./CartButton";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const handleOpenToggle = () => {
    setOpen(!open);
  };

  const state = useSelector((state) => state.cartItem);
  const cartItem = state.cartItem;

  return (
    <>
      <div>
        {cartItem.length > 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItem.length} in the cart{" "}
          </div>
        )}
      </div>
      <div>
        <div className="cart">
          <Fade left cascade>
            <ul className="cart-itema">
              {cartItem.length > 0 &&
                cartItem.map((item) => <CartItem key={item._id} item={item} />)}
            </ul>
          </Fade>
        </div>
        {cartItem.length > 0 && (
          <CartButton handleOpenToggle={handleOpenToggle} />
        )}
        {open && cartItem.length > 0 && (
          <Fade right cascade>
            <TextForm />
          </Fade>
        )}
      </div>
    </>
  );
};

export default Cart;
