import initialState from "../store/initial";
import { MODAL_CLOSE, MODAL_OPEN } from "./constans";

const openReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        ...action.payload,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default openReducer;
