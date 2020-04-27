import React from "react";

const DressCard = ({ dressData, onAddCart }) => {
  return (
    <div className="row">
      {dressData.map((d, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-3">
            <div className="card-header">{d.name}</div>
            <div className="card-body">
              <h6 className="card-title price">Price: {d.price}</h6>
              <button onClick={() => onAddCart(d)} className="btn btn-warning">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DressCard;
