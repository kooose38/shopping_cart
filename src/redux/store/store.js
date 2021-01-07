import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk";
import productsreducer from "../products/reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const RootReducer = combineReducers({ products: productsreducer });

export const store = createStore(
   RootReducer,
   composeEnhancer(applyMiddleware(thunk))
)