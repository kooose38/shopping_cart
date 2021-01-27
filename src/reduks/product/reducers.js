import initialState from "../store/initial";
import { FETCH_PRODUCT, FILTER_PRODUCT, SORT_PRODUCT } from "./constans";

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state.products,
        ...action.payload,
      };
    case FILTER_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case SORT_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
