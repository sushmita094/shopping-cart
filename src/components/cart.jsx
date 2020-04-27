import React from "react";

const Cart = ({ dressesInCart, onDeleteCart, onResetCart }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={onResetCart}>
        Reset Cart
      </button>
      <p>
        Items in your cart
        <span className="badge badge-primary">{dressesInCart.length}</span>
      </p>
      {dressesInCart.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDeleteCart(item)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
