import React from "react";
import Button from "./button";

const DressCard = ({ dressData, onAddCart }) => {
  return (
    <div className="row">
      {dressData.map((d, index) => (
        <div className="col-md-4" key={index}>
          <div className="mb-3 dress-card">
            {/* <div className="card-body"> */}
            <p className="name">{d.name}</p>
            <p className="price">Price: {d.price}</p>
            <Button
              buttonClasses="btn--orange"
              handleClick={() => onAddCart(d)}
              buttonText="Add"
            />
            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DressCard;
