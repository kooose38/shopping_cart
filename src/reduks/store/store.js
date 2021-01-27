import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import CartReducer from "../Cart/reducers";
import openReducer from "../modal/reducers";
import orderReducer from "../Order/reducers";
import ProductReducer from "../product/reducers";

const rootReducer = combineReducers({
  products: ProductReducer,
  cartItem: CartReducer,
  order: orderReducer,
  open: openReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
