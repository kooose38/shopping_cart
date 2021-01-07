import initialState from "../store/initial";
import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS } from "./constans";

const productsreducer = (state = initialState.products, action) => {
   switch (action.type) {
      case FETCH_PRODUCTS:
         return {
            ...state,  //list:[]
            ...action.payload,
         }
      case FILTER_PRODUCTS:
         return {
            ...state,
            ...action.payload,
         }
      case SORT_PRODUCTS:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state
   }
}

export default productsreducer;