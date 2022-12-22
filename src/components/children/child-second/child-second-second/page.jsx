import React from "react";

const SecondOfSecondChild = () => {
  const handleOnClick = () => {
    alert("Child 2.2 can't change message! ");
    return;
  };

  return (
    <div className="grand-child__container" onClick={handleOnClick}>
      Child 2.2
    </div>
  );
};
export default SecondOfSecondChild;
