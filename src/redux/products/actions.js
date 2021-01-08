import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS } from "./constans";

export const fetchProducts = () => {
   return async (dispatch) => {
      const res = await fetch(`http://localhost:5000/api/products`);
      const products = await res.json();

      dispatch({
         type: FETCH_PRODUCTS,
         payload: {
            list: products
         }
      });
   }
};

//filterは毎回すべてのデータから更新したいので都度、fetch.dataする
//もしstateからfilterならば、このメソッドを呼び出すごとにデータが減っていく。
export const filterProducts = (sizes) => {
   return async (dispatch) => {
      const res = await fetch(`http://localhost:5000/api/products`);
      const products = await res.json(); //[]
      //配列から、sizeのstringを含んだproductsをfilter()
      const filterProduct = products.filter(product => product.availableSizes.indexOf(sizes) != -1);
      dispatch({
         type: FILTER_PRODUCTS,
         payload: {
            list: (sizes === "" ? products : filterProduct),
            size: sizes
         }
      })
   }
};


export const sortProducts = (products, sort) => {
   return async (dispatch) => {
      const sortProducts = [...products];

      sortProducts.sort((a, b) => {
         if (sort === "lowest") {
            if (a.price > b.price) {
               return 1
            } else {
               return -1
            }
         }
         if (sort === "highest") {
            if (a.price < b.price) {
               return 1
            } else {
               return -1
            }
         }

      })

      dispatch({
         type: SORT_PRODUCTS,
         payload: {
            list: sortProducts,
            sort: sort
         }
      })
   }
};

