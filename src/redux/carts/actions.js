import { ADD_TO_CART, REMOVE_TO_CART } from "./constans";

//items === cartにある商品[] ,product === イベント時に追加される商品{}
export const addCart = (product) => {
   return async (dispatch, getState) => {
      const carts = [...getState().cart.cartItem];

      const index = carts.findIndex(cart => cart._id === product._id);

      if (index === -1) {
         carts.push({ ...product, count: 1 });
      } else {
         carts[index].count++;
      }

      dispatch({
         type: ADD_TO_CART,
         payload: {
            cartItem: carts
         }
      });
      localStorage.setItem("cartItem", JSON.stringify(carts));

   }
};

export const removeFromCart = (product) => {
   return async (dispatch, getState) => {
      const carts = [...getState().cart.cartItem];

      const index = carts.findIndex(cart => cart._id === product._id);
      if (carts[index].count > 1) {
         carts[index].count--;
      } else if (carts[index].count === 1) {
         carts.splice(index, 1);
      } else {
         return;
      }

      dispatch({
         type: REMOVE_TO_CART,
         payload: {
            cartItem: carts,
         }
      });
      localStorage.setItem("cartItem", JSON.stringify(carts))
   }
};