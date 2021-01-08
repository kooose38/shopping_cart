//initial State
const initialState = {
   products: {
      list: [],
      size: "",
      sort: ""
   },
   cart: {
      cartItem: JSON.parse(localStorage.getItem("cartItem")) || [],
   },
   order: {
      orderItem: [],
   }
}

export default initialState;