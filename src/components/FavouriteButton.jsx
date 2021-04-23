import React from "react";
import Button from "./Button";
import Close from "./icons/Close";

const FavouriteButton = ({ item, onClick, onDelete }) => {
  return (
    <div className="button__favourite__container">
      <Button
        buttonClassName={"button__favourite button--transparent"}
        buttonText={item?.name}
        onClick={onClick}
      />
      <Button
        buttonClassName={"button--transparent"}
        buttonText={<Close className="icon__return" />}
        onClick={onDelete}
      />
    </div>
  );
};
export default FavouriteButton;
