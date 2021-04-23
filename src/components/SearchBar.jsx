import React, { useState } from "react";
import Button from "./Button";
import Empty from "./icons/Empty";

const SearchBar = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        type="text"
      />
      <Button
        buttonClassName={"button__empty"}
        buttonText={<Empty className="icon__empty" />}
        onClick={() => {
          setInputValue("");
          onChange("");
        }}
      />
    </div>
  );
};
export default SearchBar;
