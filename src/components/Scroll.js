import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid black",
        height: "37.5rem",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
