import { FETCH_PRODUCT, FILTER_PRODUCT, SORT_PRODUCT } from "./constans";

export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3001/api/products");
    const products = await res.json();

    dispatch({
      type: FETCH_PRODUCT,
      payload: {
        products,
      },
    });
  };
};

export const filterProduct = (e) => {
  return async (dispatch) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/api/products");
    const products = await res.json();

    let filterProduct = products.filter(
      (product) => product.availableSizes.indexOf(e.target.value) != -1
    );

    if (e.target.value === "") {
      filterProduct = products;
    }

    dispatch({
      type: FILTER_PRODUCT,
      payload: {
        products: filterProduct,
        size: e.target.value,
      },
    });
  };
};

export const sortProduct = (e) => {
  return (dispatch, getState) => {
    e.preventDefault();
    const products = getState().products.products;

    const sortedProducts = products.sort((a, b) => {
      if (e.target.value === "lowest") {
        if (a.price < b.price) {
          return -1;
        } else {
          return 1;
        }
      } else if (e.target.value === "Highest") {
        if (a.price > b.price) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (a._id < b._id) {
          return -1;
        } else {
          return 1;
        }
      }
    });

    dispatch({
      type: SORT_PRODUCT,
      payload: {
        products: sortedProducts,
        sort: e.target.value,
      },
    });
  };
};
