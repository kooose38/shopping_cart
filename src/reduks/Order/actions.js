import { CREATE_ORDER } from "./constans";

export const createOrder = (orderProduct) => {
  return async (dispatch, getState) => {
    const orderState = getState().order.order;

    orderState.push(orderProduct);

    localStorage.setItem("order", JSON.stringify(orderState));

    const res = await fetch("http://localhost:3001/api/products/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderProduct),
    });
    const resp = await res.json();
    if (res.status !== 200) {
      alert(resp.message);
      return;
    }

    dispatch({
      type: CREATE_ORDER,
      payload: {
        order: orderState,
      },
    });
  };
};
