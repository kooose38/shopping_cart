import React from "react";

const Text = ({ handleChange, type, value, text }) => {
  return (
    <li>
      <label htmlFor="">{text}</label>
      <input type={type} value={value} required onChange={handleChange} />
    </li>
  );
};

export default Text;
