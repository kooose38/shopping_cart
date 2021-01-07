import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk";
import cartReducer from "../carts/reducers";
import productsreducer from "../products/reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const RootReducer = combineReducers({ products: productsreducer, cart: cartReducer });

export const store = createStore(
   RootReducer,
   composeEnhancer(applyMiddleware(thunk))
)