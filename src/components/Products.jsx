import React, { Component } from 'react'
import formatCurrency from '../Util';

const Products = (props) => {
   return (
      <div>
         <ul className="products">
            {props.products.map(product => (
               <li key={product._id}>
                  <div className="product">
                     <a fref={`#/${product._id}`} >
                        <img src={product.image} alt={product.title} />
                        <p>
                           {product.title}
                        </p>
                     </a>
                     <div className="product-price">
                        <div>
                           {formatCurrency(product.price)}
                        </div>
                        <button className="button primary">
                           商品を追加する
                        </button>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Products;