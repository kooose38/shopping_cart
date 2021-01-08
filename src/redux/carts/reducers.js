import initialState from "../store/initial";
import { ADD_TO_CART, CLEAR_CART, REMOVE_TO_CART } from "./constans";

const cartReducer = (state = initialState.cart, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return {
            ...state,
            ...action.payload,
         }
      case REMOVE_TO_CART:
         return {
            ...state,
            ...action.payload,
         }
      case CLEAR_CART:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state
   }

};

export default cartReducer;
