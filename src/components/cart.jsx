import React, { Component } from "react";

const Cart = ({ itemsInCart }) => {
  console.log(itemsInCart);
  return (
    <div>
      <button className="btn btn-primary">Reset Cart</button>
      <p>
        Items in your cart <span className="badge badge-primary">0</span>
      </p>
      {itemsInCart.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
