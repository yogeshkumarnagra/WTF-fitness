import React from "react";
import { Link } from "react-router-dom";
import "./page-not-found.css";

export const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found d-flex justify-center align-center bg-base w-100 h-100">
        OPPS! Page Not created yet.
        <span className="redirect-url">
          <Link className="redirect-url" to={"/gym"}>
            Home
          </Link>
        </span>
      </div>
    </>
  );
};
