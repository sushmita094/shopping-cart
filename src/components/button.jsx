import React from "react";

const Button = ({ buttonText, buttonClasses, buttonType, handleClick }) => {
  return (
    <button
      className={buttonClasses}
      type={buttonType}
      onClick={handleClick ? handleClick : () => {}}
    >
      {buttonText}
    </button>
  );
};

export default Button;
