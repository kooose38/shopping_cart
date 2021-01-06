import React, { useMemo } from 'react'
import formatCurrency from '../Util';

const Cart = (props) => {
   const cart = props.cart;

   const item = cart.map(item => item.count);

   const cartReducer = useMemo(() => {
      return cart.reduce((sum, cart) => sum += cart.price, 0)
   }, [cart, item]);

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
               )}

            </div>
            {props.cart.length > 0 && (
               <div className="cart">
                  <div className="total">
                     <div>
                        Total : {formatCurrency(cartReducer)}
                     </div>
                     <button className="button primary">Proceed</button>
                  </div>

               </div>

            )}

         </div>
      </div>
   );
}

export default Cart;