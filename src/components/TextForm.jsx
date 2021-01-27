import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderRemoveToCart } from "../reduks/Cart/actions";
import { createOrder } from "../reduks/Order/actions";
import { Text } from "./";

const TextForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const inputName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [setName]
  );
  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const inputAddress = useCallback(
    (e) => {
      setAddress(e.target.value);
    },
    [setAddress]
  );

  const textBody = [
    {
      id: "name",
      text: "Name",
      type: "text",
      value: name,
      handleChange: inputName,
    },
    {
      id: "email",
      text: "Email",
      type: "email",
      value: email,
      handleChange: inputEmail,
    },
    {
      id: "address",
      text: "Address",
      type: "text",
      value: address,
      handleChange: inputAddress,
    },
  ];

  const resetText = () => {
    setName("");
    setEmail("");
    setAddress("");
  };
  const state = useSelector((state) => state.cartItem);
  const cartItem = state.cartItem;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || address === "") {
      alert("必須項目を入力してください");
      return;
    }
    if (cartItem.length === 0) {
      alert("カートに商品がありません");
      return;
    }
    const total = cartItem.reduce(
      (sum, item) => (sum += item.price * item.count),
      0
    );
    try {
      const order = {
        name: name,
        email: email,
        address: address,
        total: total,
        count: Number(cartItem.length),
        cartItem: cartItem,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      const shippingDate = 3;
      const stringDate =
        String(new Date().getFullYear()) +
        "-" +
        String(new Date().getMonth() + 1).padStart(2, "0") +
        "-" +
        String(new Date().getDate() + shippingDate).padStart(2, "0");
      dispatch(createOrder(order));
      dispatch(orderRemoveToCart());
      alert(`${name}様、発注処理が完了しました。到着予定日は${stringDate}です`);
      resetText();
    } catch (err) {
      alert(err.message);
      resetText();
    }
  };
  return (
    <div className="cart">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <ul className="form-container">
          {textBody.map((body) => (
            <Text
              text={body.text}
              type={body.type}
              value={body.value}
              handleChange={body.handleChange}
              key={body.id}
            />
          ))}
          <li>
            <button className="button primary" type="submit">
              Checkout
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default TextForm;
