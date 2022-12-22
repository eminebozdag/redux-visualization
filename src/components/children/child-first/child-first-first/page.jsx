import React from "react";
import { useDispatch } from "react-redux";
import { updateText } from "../../../../reducers/actions/updateAction";

const FirstOfFirstChild = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(updateText("Changed by Child 1.1"));
  };

  return (
    <div className="grand-child__container" onClick={handleOnClick}>
      Child 1.1
    </div>
  );
};
export default FirstOfFirstChild;
