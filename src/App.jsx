import React, { Component } from 'react';
import data from "./data.json";
import { Cart, Products } from "./components/index";
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
      size: "",
      sort: "",
    }
    this.filterProducts = this.filterProducts.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFormCart = this.removeFormCart.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  createOrder(order) {
    alert(`${order.name}様、注文が完了しました。`)
  }

  removeFormCart(item) {
    const cart = [...this.state.cart];

    const index = cart.findIndex(cartItem => cartItem._id === item._id);
    if (cart[index].count > 1) {
      cart[index].count--;
    } else if (cart[index].count === 1) {
      cart.splice(index, 1);
    } else {
      return;
    }

    this.setState({
      cart: cart
    })
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  addToCart(product) {
    const cart = [...this.state.cart];
    //既に同じ商品があるか判定    
    const index = cart.findIndex(cart => cart._id === product._id);
    if (index === -1) {
      cart.push({ ...product, count: 1 });
    } else {
      cart[index].count++;
    }
    this.setState({
      cart: cart
    })
    //ローカルにカートの更新情報を保持　データベースがないため
    //DEVTOOLS : Application localStorage で確認
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  filterProducts(e) {
    const sizes = e.target.value;
    const products = [...data.products];
    if (sizes === "") {
      this.setState({
        size: sizes,
        products: products,
      })
    } else {
      this.setState({
        size: sizes,
        //配列からe.target.valueと同じ文字列を含んだものだけ抽出 indexOf() 存在していなければ-1
        products: products.filter(product => product.availableSizes.indexOf(sizes) != -1)
      })
    }
  }
  sortProducts(e) {
    const sort = e.target.value;
    const products = [...data.products];
    if (sort === "") {
      this.setState({
        sort: sort,
        products: products,
      })
    } else {
      this.setState({
        sort: sort,
        products: products.sort((a, b) => {
          if (sort === "lowest") {
            if (a.price > b.price) {
              return 1
            } else {
              return -1
            }
          }
          if (sort === "highest") {
            if (a.price < b.price) {
              return 1
            } else {
              return -1
            }
          }
        })
      })
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
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart cart={this.state.cart} removeFormCart={this.removeFormCart} createOrder={this.createOrder} />
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
