import React, { useState, useCallback } from 'react';
import Fade from "react-reveal";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from '../redux/orders/actions';

const TextForm = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [address, setAddress] = useState("")

   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart.cartItem);

   const inputName = useCallback((e) => {
      setName(e.target.value)
   }, [setName])
   const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
   }, [setEmail])
   const inputAddress = useCallback((e) => {
      setAddress(e.target.value)
   }, [setAddress]);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || address === "") {
         alert("必須項目を入力してください");
         return;
      }
      if (cart.length === 0) {
         alert("商品がありません。")
         return;
      }

      const orderData = {
         name: name,
         email: email,
         address: address,
         cart: cart,
         total: cart.reduce((sum, cart) => sum + cart.price * cart.count, 0)
      }
      dispatch(createOrder(orderData))
   }
   return (
      <Fade rigth cascade>
         <div className="cart">
            <form onSubmit={(e) => handleSubmit(e)}>
               <ul className="form-container">
                  <li>
                     <label>Name</label>
                     <input
                        name="name"
                        value={name}
                        type="text"
                        required
                        onChange={inputName}
                     />
                  </li>
                  <li>
                     <label>Email</label>
                     <input
                        name="email"
                        value={email}
                        type="email"
                        required
                        onChange={inputEmail}
                     />
                  </li>
                  <li>
                     <label>address</label>
                     <input
                        name="address"
                        value={address}
                        type="text"
                        required
                        onChange={inputAddress}
                     />
                  </li>
                  <li>
                     <button type="submit" className="button primary">Checkout</button>
                  </li>
               </ul>
            </form>
         </div>

      </Fade>
   );
}

export default TextForm;