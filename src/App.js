import React from "react";
import "./App.css";
import DressCard from "./components/dresscard";
import Filters from "./components/filters";
import SearchYear from "./components/searchyear";
import Cart from "./components/cart";
import data from "./data.json";

let dressData = data.DressDetails;

class App extends React.Component {
  state = {
    value: "Any",
    price: "Any",
    dressesInCart: [],
  };

  handleAddCart = (dress) => {
    let dressesInCart = [...this.state.dressesInCart];
    if (dressesInCart.some((item) => item.name === dress.name)) {
    } else {
      dressesInCart.push(dress);
    }
    this.setState({
      dressesInCart,
    });
  };

  handleDeleteCart = (dress) => {
    let dressesInCart = [...this.state.dressesInCart];
    dressesInCart = dressesInCart.filter((m) => m.name !== dress.name);
    this.setState({
      dressesInCart,
    });
  };

  handleResetCart = () => {
    this.setState({
      dressesInCart: [],
    });
  };

  handleFilterChange = (e) => {
    let value = e.target.value;
    this.setState({
      value,
    });
    dressData = data.DressDetails;
    if (value !== "Any") {
      dressData = dressData.filter((c) => c.language === value);
    }
  };

  handleSearchChange = (e) => {
    let price = e.target.value;
    this.setState({
      price,
    });
    console.log(price);
    dressData = data.DressDetails;
    if (price !== "Any") {
      dressData = dressData.filter((c) => c.price === price);
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="d-flex justify-content-between">
            <Filters onFilterChange={this.handleFilterChange} />
            <SearchYear onSearchChange={this.handleSearchChange} />
          </div>
          <div className="row">
            <div className="col-md-9">
              <DressCard dressData={dressData} onAddCart={this.handleAddCart} />
            </div>
            <div className="col-md-3">
              <Cart
                dressesInCart={this.state.dressesInCart}
                onDeleteCart={this.handleDeleteCart}
                onResetCart={this.handleResetCart}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
