import React, { useState, useCallback } from 'react'
import formatCurrency from '../Util';
import Fade from "react-reveal/Fade";
import { HomeModal } from "./";
//class コンポーネント
class Products extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         product: null
      }
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
   }
   openModal(product) {
      if (!this.state.product) {
         this.setState({ product: product })
      }
   }
   closeModal() {
      if (this.state.product) {
         this.setState({ product: null });
      }
   }
   render() {
      return (
         <div>
            {/* animation */}
            <Fade bottom cascade>
               <ul className="products">
                  {this.props.products.map(product => (
                     <li key={product._id}>
                        <div className="product">
                           <a
                              href={"#" + product._id}
                              onClick={() => this.openModal(product)}
                           >
                              <img src={product.image} alt={product.title} />
                              <p>
                                 {product.title}
                              </p>
                           </a>
                           <div className="product-price">
                              <div>
                                 {formatCurrency(product.price)}
                              </div>
                              <button className="button primary" onClick={() => this.props.addToCart(product)}>
                                 商品を追加する
                           </button>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>

            </Fade>

            {
               this.state.product && (
                  <HomeModal
                     product={this.state.product}
                     addToCart={this.props.addToCart}
                     closeModal={this.closeModal}
                  />

               )
            }

         </div>
      );
   }
}
//関数コンポーネント
// const Products = (props) => {
//    const [product, setProduct] = useState(null);

//    const openModal = useCallback((product) => {
//       setProduct(product)
//    }, [setProduct]);
//    const closeModal = useCallback(() => {
//       setProduct(null)
//    }, [setProduct]);

//    return (
//       <div>
//          <Fade bottom cascade>
//             <ul className="products">
//                {props.products.map(product => (
//                   <li key={product._id}>
//                      <div className="product">
//                         <a
//                            href={"#" + product._id}
//                            onClick={() => openModal(product)}
//                         >
//                            <img src={product.image} alt={product.title} />
//                            <p>
//                               {product.title}
//                            </p>
//                         </a>
//                         <div className="product-price">
//                            <div>
//                               {formatCurrency(product.price)}
//                            </div>
//                            <button className="button primary" onClick={() => props.addToCart(product)}>
//                               商品を追加する
//                         </button>
//                         </div>
//                      </div>
//                   </li>
//                ))}
//             </ul>

//          </Fade>

//          {
//             product && (
//                <HomeModal
//                   product={product}
//                   addToCart={props.addToCart}
//                   closeModal={closeModal}
//                />

//             )
//          }

//       </div>
//    );
// }

export default Products;