import React from "react";
import "./App.css";
import MovieCard from "./components/moviecard";
import Filters from "./components/filters";
import SearchYear from "./components/searchyear";
import Cart from "./components/cart";
import data from "./data.json";

let dressData = data.DressDetails;

class App extends React.Component {
  state = {
    value: "Any",
    price: "Any",
    itemsInCartVar: [],
  };

  handleAddCart = (index) => {
    let item = dressData.filter((c) => dressData.indexOf(c) === index);
    this.itemsInCart(item);
  };

  itemsInCart = (item) => {
    let myVar = [...this.state.itemsInCartVar];
    myVar.push(item);
    this.setState({
      itemsInCartVar: myVar,
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
              <MovieCard dressData={dressData} onAddCart={this.handleAddCart} />
            </div>
            <div className="col-md-3">
              <Cart itemsInCart={this.state.itemsInCartVar} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
