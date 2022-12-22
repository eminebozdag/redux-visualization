import React from "react";
import FirstOfSecondChild from "./child-second-first/page";
import SecondOfSecondChild from "./child-second-second/page";

const SecondChild = () => {
  const handleOnClick = () => {
    alert("Child 2 can't change message!");
    return;
  };

  return (
    <div className="container">
      <h1 onClick={handleOnClick}>Child 2</h1>
      <div className="child-container">
        <FirstOfSecondChild />
        <SecondOfSecondChild />
      </div>
    </div>
  );
};
export default SecondChild;
