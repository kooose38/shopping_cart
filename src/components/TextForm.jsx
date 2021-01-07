import React, { useState, useCallback } from 'react';
import Fade from "react-reveal";

const TextForm = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [address, setAddress] = useState("")

   const inputName = useCallback((e) => {
      setName(e.target.value)
   }, [setName])
   const inputEmail = useCallback((e) => {
      setEmail(e.target.value)
   }, [setEmail])
   const inputAddress = useCallback((e) => {
      setAddress(e.target.value)
   }, [setAddress]);
   return (
      <Fade rigth cascade>
         <div className="cart">
            <form onSubmit={(e) => this.createOrder(e)}>
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