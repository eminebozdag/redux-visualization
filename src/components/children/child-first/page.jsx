import React from "react";
import { useDispatch } from "react-redux";
import { updateText } from "../../../reducers/actions/updateAction";
import FirstOfFirstChild from "./child-first-first/page";
import SecondOfFirstChild from "./child-first-second/page";

const FirstChild = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(updateText("Changed by Child 1"));
  };

  return (
    <div className="container">
      <h1 onClick={handleOnClick}>Child 1</h1>
      <div className="child-container">
        <FirstOfFirstChild />
        <SecondOfFirstChild />
      </div>
    </div>
  );
};
export default FirstChild;
