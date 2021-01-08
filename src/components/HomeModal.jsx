import React, { Component } from 'react'
import Modal from "react-modal";
import Zoom from 'react-reveal/Zoom';
import formatCurrency from '../Util';
import { useDispatch } from "react-redux";
import { addCart } from '../redux/carts/actions';

const HomeModal = (props) => {
   const dispatch = useDispatch();
   return (
      <Modal isOpen={true} onClick={props.closeModal}>
         <Zoom>
            <button className="product-modal" onClick={props.closeModal}>x</button>
            <div className="product-details">
               <img src={props.product.image} alt={props.product.title} />
               <div className="product-details-description"></div>
               <p>
                  <strong>{props.product.title}</strong>
               </p>
               <p>
                  {props.product.description}
               </p>
               <p>
                  Avaiable Sizes:{" "}
                  {props.product.availableSizes.map(size => (
                     <span>
                        {" "}
                        <button className="button">{size}</button>
                     </span>

                  ))}
               </p>
               <div className="product-price">
                  <div>
                     {formatCurrency(props.product.price)}
                  </div>
                  <button className="button primary" onClick={() => {
                     dispatch(addCart(props.product))
                     props.closeModal();
                  }}>
                     カートに商品を追加する
                  </button>
               </div>
            </div>
         </Zoom>
      </Modal>
   );
}

export default HomeModal;