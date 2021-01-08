import { CLEAR_CART } from "../carts/constans";
import { CLEAR_ORDER, CREATE_ORDER } from "./constans";

export const createOrder = (order) => {
   return async (dispatch, getState) => {
      const stateOrder = getState().order.orderItem;

      try {
         const res = await fetch(`http://localhost:5000/api/orders`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
         })
         const completeOrder = await res.json();
         if (res.status !== 200) {
            alert(completeOrder.message)
            return;
         }
         stateOrder.push(completeOrder);

         localStorage.clear("cartItem");

         dispatch({
            type: CREATE_ORDER,
            payload: {
               orderItem: stateOrder
            },
            type: CLEAR_CART,
            payload: {
               cartItem: [],
            }
         });

      } catch (err) {
         alert(err)
      }

   }
};

export const clearOrder = () => {
   return (dispatch) => {
      dispatch({
         type: CLEAR_ORDER,
         payload: {
            orderItem: []
         }
      });

   }
}