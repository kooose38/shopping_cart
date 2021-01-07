import { FETCH_PRODUCTS } from "./constans";

export const fetchProducts = async () => {
   return async (dispatch) => {
      const res = await fetch(`http://localhost:5000/api/products`);
      const products = await res.json();

      dispatch({
         type: FETCH_PRODUCTS,
         payload: {
            list: products
         }
      });
   }
}