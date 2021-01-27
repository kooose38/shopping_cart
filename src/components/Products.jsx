import React, { useState } from "react";
import { ProductItem, ProductModal } from "./";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

const Products = () => {
  const [productState, setProduct] = useState({});
  const state = useSelector((state) => state.products);
  const products = state.products;
  const openState = useSelector((state) => state.open);
  const modalOpen = openState.open;

  return (
    <div>
      <Fade bottom cascade>
        <ul className="products">
          {products ? (
            products.map((product) => (
              <ProductItem
                key={product._id}
                setProduct={setProduct}
                product={product}
              />
            ))
          ) : (
            <p>not fuond</p>
          )}
        </ul>
      </Fade>
      {modalOpen && <ProductModal product={productState} />}
    </div>
  );
};

export default Products;
