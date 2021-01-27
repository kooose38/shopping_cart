import { ADD_CART, DELETE_CART, ORDET_TO_DELETE_CART } from "./constans";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItem = getState().cartItem.cartItem;

    const index = cartItem.findIndex((item) => item._id === product._id);

    if (index === -1) {
      product.count = 1;
      cartItem.push(product);
    } else {
      cartItem[index].count++;
    }

    localStorage.setItem("cartItem", JSON.stringify(cartItem));

    dispatch({
      type: ADD_CART,
      payload: {
        cartItem: cartItem,
      },
    });
  };
};

export const removeCart = (item) => {
  return (dispatch, getState) => {
    const cartItem = getState().cartItem.cartItem;

    const index = cartItem.findIndex((cart) => cart._id === item._id);

    if (cartItem[index].count > 1) {
      cartItem[index].count--;
    } else if (cartItem[index].count === 1) {
      cartItem.splice(index, 1);
    } else {
      return cartItem;
    }

    localStorage.setItem("cartItem", JSON.stringify(cartItem));

    dispatch({
      type: DELETE_CART,
      payload: {
        cartItem: cartItem,
      },
    });
  };
};

export const orderRemoveToCart = () => {
  return (dispatch) => {
    localStorage.removeItem("cartItem");
    dispatch({
      type: ORDET_TO_DELETE_CART,
      payload: {
        cartItem: [],
      },
    });
  };
};
