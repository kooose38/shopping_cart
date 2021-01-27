import React from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatCurrency from "../formatPrice";
import { addToCart } from "../reduks/Cart/actions";
import { ProductSize } from "./";
import { useDispatch } from "react-redux";
import { handleClose } from "../reduks/modal/actions";

function ProductModal({ product }) {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addToCart(product));
    dispatch(handleClose());
  };

  const handleClickClose = () => {
    dispatch(handleClose());
  };

  return (
    <Modal isOpen={true} onRequestClose={() => handleClickClose()}>
      <Zoom>
        <button onClick={() => handleClickClose()}>x</button>
        <div className="product-details">
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
          />
          <div className="product-details-description">
            <p>
              <strong>{product.title}</strong>
            </p>
            <p>{product.description}</p>
            <p>
              Size:{" "}
              {product.availableSizes.map((size, index) => (
                <ProductSize key={index.toString()} size={size} />
              ))}
            </p>
            <div className="product-price">
              <div>{formatCurrency(product.price)}</div>
              <button
                className="button primary"
                onClick={() => {
                  handleAddCart();
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Zoom>
    </Modal>
  );
}

export default ProductModal;
