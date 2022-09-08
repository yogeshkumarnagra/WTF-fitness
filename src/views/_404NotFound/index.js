import React from "react";
import { Link } from "react-router-dom";
import "./page-not-found.css";

export const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found d-flex justify-center align-center bg-base w-100 h-100">
        <div>
          <div>OOPS! Page Not Created Yet.</div>
          <div className="redirect-url d-flex justify-center">
            <Link className="redirect-url " to={"/gym"}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
