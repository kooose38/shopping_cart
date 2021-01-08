import React from 'react'
import { connect } from "react-redux";
import { addCart } from '../redux/carts/actions';
import formatCurrency from '../Util';

class ProductList extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <li key={this.props.product._id}>
            <div className="product">
               <a
                  href={"#" + this.props.product._id}
                  onClick={() => this.props.openModal(this.props.product)}
               >
                  <img src={this.props.product.image} alt={this.props.product.title} />
                  <p>
                     {this.props.product.title}
                  </p>
               </a>
               <div className="product-price">
                  <div>
                     {formatCurrency(this.props.product.price)}
                  </div>
                  <button className="button primary" onClick={() => this.props.addCart(this.props.product)}>
                     商品を追加する
                  </button>
               </div>
            </div>
         </li>
      )
   }
};

const mapStateToProps = (state) => {
   return {
      products: state.products.list,
   }
};

const mapDispatchToProps = {
   addCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);