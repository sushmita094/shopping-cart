import React from "react";

const MovieCard = ({ dressData, onAddCart, numbers, onButtonClick }) => {
  return (
    <div className="row">
      {dressData.map((d, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-3">
            <div className="card-header">{d.name}</div>
            <div className="card-body">
              <h6 className="card-title price">Price: {d.price}</h6>
              <button
                onClick={() => onAddCart(index)}
                className="btn btn-warning"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

//  const numbers2 = numbers;

//  const listItems = numbers2.map((number, index) => (
//    <div key={index}>
//      <p> {number.name}</p>
//      <button
//        className="btn btn-warning btn-sm"
//        onClick={() => onButtonClick(index)}
//      >
//        Click me
//      </button>
//    </div>
//  ));
//  return <div>{listItems}</div>;
