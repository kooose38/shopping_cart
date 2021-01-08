const { default: initialState } = require("../store/initial");
const { CREATE_ORDER, CLEAR_ORDER } = require("./constans");

const orderReducer = (state = initialState.order, action) => {
   switch (action.type) {
      case CREATE_ORDER:
         return {
            ...state,
            ...action.payload,
         }
      case CLEAR_ORDER:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state
   }
};

export default orderReducer;
