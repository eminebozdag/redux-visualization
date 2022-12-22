import React from "react";

const FirstOfSecondChild = () => {
  const handleOnClick = () => {
    alert("Child 2.1 can't change message!");
    return;
  };

  return (
    <div className="grand-child__container" onClick={handleOnClick}>
      Child 2.1
    </div>
  );
};
export default FirstOfSecondChild;
