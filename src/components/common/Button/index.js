import React from "react";
import "./button.css";

export const Button = ({ btnProps }) => {
  const { innertext, btnStyles, handler } = btnProps;

  return (
    <button
      style={btnStyles}
      onClick={() => handler()}
      className="submit-button "
    >
      {innertext}
    </button>
  );
};
