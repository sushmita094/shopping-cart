import React from "react";
import Button from "./button";

const Cart = ({ dressesInCart, onDeleteCart, onResetCart }) => {
  return (
    <div>
      <Button
        buttonClasses="btn btn-primary"
        handleClick={onResetCart}
        buttonText="Reset Cart"
      />
      <p>
        Items in your cart
        <span className="badge badge-primary">{dressesInCart.length}</span>
      </p>
      {dressesInCart.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <Button
              buttonClasses="btn btn-danger btn-sm"
              handleClick={() => onDeleteCart(item)}
              buttonText="Delete"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
