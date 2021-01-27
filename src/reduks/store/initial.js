const initialState = {
  products: [],
  cartItem: JSON.parse(localStorage.getItem("cartItem"))
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  order: JSON.parse(localStorage.getItem("order"))
    ? JSON.parse(localStorage.getItem("order"))
    : [],
  size: "",
  sort: "",
  open: false,
};

export default initialState;
