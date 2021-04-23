import React from "react";

const Close = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={"ionicon " + className}
      viewBox="0 0 512 512"
    >
      <title>Close</title>
      <path
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
};
export default Close;
