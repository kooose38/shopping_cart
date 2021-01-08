import React, { Component } from 'react';
import { Cart, Products } from "./components/index";
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
              />
              <Products
              />
            </div>
            <div className="sidebar">
              <Cart
              />
            </div>
          </div>
        </main>
        <footer>
          All rigth is reserced
        </footer>
      </div>
    );
  }
}

export default App;
