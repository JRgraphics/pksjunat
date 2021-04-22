import React from "react";

const Button = ({ buttonClassName = "", buttonText = "", onClick }) => {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {buttonText}
    </button>
  );
};
export default Button;
