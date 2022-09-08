import React from "react";
import "./loader.css";
import loader from "../../../images/loader.gif";

export const Loader = () => {
  return (
    <div className="loader absolute d-flex justify-center align-center bg-black">
      <img src={loader} alt="loader" />
    </div>
  );
};
