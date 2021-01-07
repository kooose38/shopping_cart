import initialState from "../store/initial";
import { FETCH_PRODUCTS } from "./constans";

const productsreducer = (state = initialState.products, action) => {
   switch (action.type) {
      case FETCH_PRODUCTS:
         return {
            ...state,  //list:[]
            ...action.payload,
         }
      default:
         return state
   }
}

export default productsreducer;