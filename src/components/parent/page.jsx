import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateText } from "../../reducers/actions/updateAction";
import FirstChild from "../children/child-first/page";
import SecondChild from "../children/child-second/page";
import "./page.css";

const Parent = () => {
  const message = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(updateText("Default message by Parent Node"));
  };

  return (
    <div className="container">
      <h1 onClick={handleOnClick}>Parent</h1>
      <p>
        current message: <span>{message}</span>
      </p>
      <div className="children-container">
        <FirstChild />
        <SecondChild />
      </div>
    </div>
  );
};
export default Parent;
