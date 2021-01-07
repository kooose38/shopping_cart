//initial State
const initialState = {
   products: {
      list: [],
      size: "",
      sort: ""
   },
   cart: {
      cartItem: JSON.parse(localStorage.getItem("cartItem")) || [],
   }
}

export default initialState;