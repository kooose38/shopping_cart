import React, { Component } from 'react'

const Filter = (props) => {
   return (
      <div className="filter">
         <div className="filter-result">{props.count}</div>
         <div className="filter-sort">Order {" "}
            <select value={props.size} onChange={(e) => props.sortProducts(e)}>
               <option>Latest</option>
               <option value="lowest">Lowest</option>
               <option value="highest">Higthes</option>
            </select>
         </div>
         <div className="filter-size">Filter {" "}
            <select value={props.sort} onChange={(e) => props.filterProducts(e)}>
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

export default Filter;