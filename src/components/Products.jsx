import React from 'react'
import formatCurrency from '../Util';
import Fade from "react-reveal/Fade";
import { HomeModal } from "./";
import { connect } from "react-redux"
import { fetchProducts } from '../redux/products/actions';
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
   componentDidMount() {
      this.props.handleFetchProducts()
   }
   render() {
      return (
         <div>
            {/* animation */}
            <Fade bottom cascade>
               {
                  !this.props.products ? (
                     <div>...Loading</div>
                  ) : (

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
                     )
               }

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
};

//connect()
// 第一引数：mapStateToProps (storeのstate)
// 第二引数：mapDispatchToProps (stateの更新する関数)
//最後に子Component名称

const mapStateToProps = (state) => {
   return { products: state.products.list }
}

const mapDispatchToProps = (dispatch) => {
   return {
      handleFetchProducts: async () => dispatch(await fetchProducts())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);