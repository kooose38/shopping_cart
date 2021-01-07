import React from 'react'
import formatCurrency from '../Util';
import Fade from "react-reveal";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/carts/actions";

class Cart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         email: "",
         address: "",
         showCheckout: false,
      }
      this.inputName = this.inputName.bind(this);
      this.inputEmail = this.inputEmail.bind(this);
      this.inputAddress = this.inputAddress.bind(this);
   }
   inputName(e) {
      this.setState({ name: e.target.value })
   };
   inputEmail(e) {
      this.setState({ email: e.target.value })
   };
   inputAddress(e) {
      this.setState({ address: e.target.value })
   };

   cartReducer() {
      return this.props.cart.reduce((sum, cart) => sum += cart.price, 0)

   }

   createOrder(e) {
      e.preventDefault();
      if (this.props.name === "" || this.props.email === "" || this.props.address === "") {
         alert("必須項目を入力してください。")
         return;
      }

      const order = {
         name: this.props.name,
         email: this.props.email,
         address: this.props.address,
         cartItem: this.props.cart,
      };

   }
   render() {
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
               <div className="cart">
                  {this.props.cart.length > 0 && (
                     <Fade left cascade>
                        <ul className="cart-items">
                           {this.props.cart.map(item => (
                              <li key={item._id}>
                                 <div>
                                    <img src={item.image} alt={item.title} />
                                 </div>
                                 <div>
                                    <div>{item.title}</div>
                                    <div className="right">
                                       {formatCurrency(item.price)} x {item.count} {" "}
                                       <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                          削除する
                                 </button>
                                    </div>
                                 </div>
                              </li>

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
                           <button className="button primary" onClick={() => this.setState({ showCheckout: !this.state.showCheckout })}>Proceed</button>
                        </div>
                     </div>
                     {this.state.showCheckout && (
                        <Fade rigth cascade>
                           <div className="cart">
                              <form onSubmit={(e) => this.createOrder(e)}>
                                 <ul className="form-container">
                                    <li>
                                       <label>Name</label>
                                       <input
                                          name="name"
                                          value={this.state.name}
                                          type="text"
                                          required
                                          onChange={this.inputName}
                                       />
                                    </li>
                                    <li>
                                       <label>Email</label>
                                       <input
                                          name="email"
                                          value={this.state.email}
                                          type="email"
                                          required
                                          onChange={this.inputEmail}
                                       />
                                    </li>
                                    <li>
                                       <label>address</label>
                                       <input
                                          name="address"
                                          value={this.state.address}
                                          type="text"
                                          required
                                          onChange={this.inputAddress}
                                       />
                                    </li>
                                    <li>
                                       <button type="submit" className="button primary">Checkout</button>
                                    </li>
                                 </ul>
                              </form>
                           </div>

                        </Fade>

                     )}
                  </div>

               )}
            </div>
         </div>
      );
   }

}

const mapStateToProps = (state) => {
   return {
      cart: state.cart.cartItem,
   }
};

const mapDispatchProps = {
   removeFromCart,
}

export default connect(mapStateToProps, mapDispatchProps)(Cart);