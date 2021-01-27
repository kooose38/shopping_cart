import React from "react";

const ProductSize = ({ size }) => {
  return (
    <span>
      {" "}
      <button className="button">{size}</button>
    </span>
  );
};

export default ProductSize;
