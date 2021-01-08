import React, { Component } from 'react'
import { useDispatch } from "react-redux";
import formatCurrency from '../Util';
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import { clearOrder } from '../redux/orders/actions';

const OrderProduct = (props) => {
   const dispatch = useDispatch();
   return (
      <Modal
         isOpen={true}
         onRequestClose={() => dispatch(clearOrder())}
      >
         <Zoom>
            <button className="close-modal" onClick={() => dispatch(clearOrder())}>x</button>
            <div className="order-details">
               <h3 className="success-massage">注文履歴</h3>
               <h2>ID {props.order._id}</h2>
               <ul>
                  <li>
                     <div>Name: </div>
                     <div>{props.order.name}</div>
                  </li>
                  <li>
                     <div>Email: </div>
                     <div>{props.order.email}</div>
                  </li>
                  <li>
                     <div>Address: </div>
                     <div>{props.order.address}</div>
                  </li>
                  <li>
                     <div>Total: </div>
                     <div>{formatCurrency(props.order.total)}</div>
                  </li>
                  <li>
                     <div>商品: </div>
                     <div>
                        {props.order.cart &&
                           props.order.cart.map(item => (
                              <div>
                                 {item.count} x {item.title}
                              </div>
                           ))
                        }
                     </div>
                  </li>
               </ul>
            </div>
         </Zoom>
      </Modal>
   )
};

export default OrderProduct;