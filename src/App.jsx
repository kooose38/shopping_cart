import React, { Component } from 'react';
import data from "./data.json";
import { Products } from "./components/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
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
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              カート商品
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
