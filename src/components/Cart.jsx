import React from 'react'
import formatCurrency from '../Util';
import Fade from "react-reveal";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/carts/actions";
import { CartCard, OrderProduct, TextForm } from './';

class Cart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showCheckout: false,
      }
      this.handleToggle = this.handleToggle.bind(this);
   }
   cartReducer() {
      return this.props.cart.reduce((sum, cart) => sum + cart.count * cart.price, 0)
   }

   handleToggle() {
      this.setState({ showCheckout: !this.state.showCheckout })
   }

   render() {
      console.log(this.props.order);
      return (
         <div>
            {this.props.cart.length === 0 ? (
               <div className="cart cart-header">カートに商品はありません</div>
            ) : (
                  <div className="cart cart-header">
                     {this.props.cart.length}個の商品がカートにあります
                  </div>
               )}
            <div>
               {this.props.order.length > 0 && (
                  this.props.order.map(order => (
                     <OrderProduct order={order} key={order.id} />
                  ))
               )}
               <div className="cart">
                  {this.props.cart.length > 0 && (
                     <Fade left cascade>
                        <ul className="cart-items">
                           {this.props.cart.map(item => (
                              <CartCard id={item._id} item={item} />
                           ))}
                        </ul>
                     </Fade>
                  )}
               </div>
               {this.props.cart.length > 0 && (
                  <div>
                     <div className="cart">
                        <div className="total">
                           <div>
                              Total : {formatCurrency(this.cartReducer())}
                           </div>
                           <button className="button primary" onClick={this.handleToggle}>Proceed</button>
                        </div>
                     </div>
                     {this.state.showCheckout && (
                        <TextForm />
                     )}
                  </div>
               )}
            </div>
         </div >
      );
   }

}

const mapStateToProps = (state) => {
   return {
      cart: state.cart.cartItem,
      order: state.order.orderItem,
   }
};

const mapDispatchProps = {
   removeFromCart,
}

export default connect(mapStateToProps, mapDispatchProps)(Cart);