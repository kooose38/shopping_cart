import initialState from "../store/initial";
import { CREATE_ORDER } from "./constans";

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
