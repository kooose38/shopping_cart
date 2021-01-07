import React, { Component } from 'react'
import { connect } from "react-redux";
import { removeFromCart } from '../redux/carts/actions';
import formatCurrency from '../Util';

class CartCard extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const item = this.props.item;
      return (
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
      );

   }
};


const mapStateToProps = (state) => {
   return {
      cart: state.cart.cartItem,
   }
}

const mapDispatchProps = {
   removeFromCart,
}

export default connect(mapStateToProps, mapDispatchProps)(CartCard);