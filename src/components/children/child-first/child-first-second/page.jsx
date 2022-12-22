import React from "react";
import { useDispatch } from "react-redux";
import { updateText } from "../../../../reducers/actions/updateAction";

const SecondOfFirstChild = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(updateText("Changed by Child 1.2"));
  };

  return (
    <div className="grand-child__container" onClick={handleOnClick}>
      Child 1.2
    </div>
  );
};
export default SecondOfFirstChild;
