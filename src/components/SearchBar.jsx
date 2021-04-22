import React, { useState } from "react";
import Button from "./Button";

const SearchBar = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="search-bar">
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        type="text"
      />
      <Button
        buttonText={"Tyhjennä"}
        onClick={() => {
          setInputValue("");
          onChange("");
        }}
      />
    </div>
  );
};
export default SearchBar;
