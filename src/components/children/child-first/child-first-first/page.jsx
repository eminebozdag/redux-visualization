import React from "react";
import { useDispatch } from "react-redux";
import { updateMessage } from "../../../../reducers/actions/messageAction";

const FirstOfFirstChild = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(updateMessage("Changed by Child 1.1"));
  };

  return (
    <div className="grand-child__container" onClick={handleOnClick}>
      Child 1.1
    </div>
  );
};
export default FirstOfFirstChild;
