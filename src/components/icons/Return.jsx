import React from "react";

const Return = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"ionicon " + className}
      viewBox="0 0 512 512"
    >
      <title>Arrow Back</title>
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M244 400L100 256l144-144M120 256h292"
      />
    </svg>
  );
};
export default Return;
