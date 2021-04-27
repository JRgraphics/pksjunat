import React from "react";

const Button = ({
  buttonClassName = "",
  buttonText = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button className={buttonClassName} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};
export default Button;
