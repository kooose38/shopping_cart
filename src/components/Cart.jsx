import React, { useMemo, useState, useCallback } from 'react'
import formatCurrency from '../Util';
import Fade from "react-reveal";

const Cart = (props) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("")
   const [showCheckout, setShowCheckout] = useState(false);

   const inputName = useCallback((e) => {
      setName(e.target.value)
   }, [setName]);

   const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
   }, [setEmail]);

   const inputAddress = useCallback((e) => {
      setAddress(e.target.value);
   }, [setAddress])

   const cart = props.cart;

   const item = cart.map(item => item.count);

   const cartReducer = useMemo(() => {
      return cart.reduce((sum, cart) => sum += cart.price, 0)
   }, [cart, item]);

   const createOrder = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || address === "") {
         alert("必須項目を入力してください。")
         return;
      }

      const order = {
         name: name,
         email: email,
         address: address,
         cartItem: props.cart,
      };

      props.createOrder(order);
      setName("");
      setEmail("");
      setAddress("");

   }

   return (
      <div>
         {props.cart.length === 0 ? (
            <div className="cart cart-header">カートに商品はありません</div>
         ) : (
               <div className="cart cart-header">
                  {props.cart.length}個の商品がカートにあります
               </div>
            )}
         <div>
            <div className="cart">
               {props.cart.length > 0 && (
                  <Fade left cascade>
                     <ul className="cart-items">
                        {props.cart.map(item => (
                           <li key={item._id}>
                              <div>
                                 <img src={item.image} alt={item.title} />
                              </div>
                              <div>
                                 <div>{item.title}</div>
                                 <div className="right">
                                    {formatCurrency(item.price)} x {item.count} {" "}
                                    <button className="button" onClick={() => props.removeFormCart(item)}>
                                       削除する
                              </button>
                                 </div>
                              </div>
                           </li>

                        ))}
                     </ul>
                  </Fade>

               )}

            </div>
            {props.cart.length > 0 && (
               <div>
                  <div className="cart">
                     <div className="total">
                        <div>
                           Total : {formatCurrency(cartReducer)}
                        </div>
                        <button className="button primary" onClick={() => setShowCheckout(!showCheckout)}>Proceed</button>
                     </div>

                  </div>
                  {showCheckout && (
                     <Fade rigth cascade>
                        <div className="cart">
                           <form onSubmit={(e) => createOrder(e)}>
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

                  )}
               </div>

            )}
         </div>
      </div>
   );
}

export default Cart;