import React, { Component } from 'react'
import { filterProducts, sortProducts } from './redux/products/actions';
import { connect } from "react-redux";


class Filter extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="filter">
            <div className="filter-result">{this.props.products.length}</div>
            <div className="filter-sort">Order {" "}
               <select
                  value={this.props.sort}
                  onChange={(e) => this.props.sortProducts(this.props.products, e.target.value)}
               >
                  <option value="">Latest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Higthes</option>
               </select>
            </div>
            <div className="filter-size">Filter {" "}
               <select
                  value={this.props.size}
                  onChange={(e) => this.props.filterProducts(e.target.value)}
               >
                  <option value="">All</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
               </select>
            </div>
         </div>
      );

   }
};

const mapStateToProps = (state) => {
   return {
      products: state.products.list,
      sort: state.products.sort,
      size: state.products.size,
   }
}

const mapDispatchToProps = {
   filterProducts,
   sortProducts,
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);