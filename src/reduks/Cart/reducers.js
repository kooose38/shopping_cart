import initialState from "../store/initial";
import { ADD_CART, DELETE_CART, ORDET_TO_DELETE_CART } from "./constans";

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        ...action.payload,
      };
    case ORDET_TO_DELETE_CART:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
