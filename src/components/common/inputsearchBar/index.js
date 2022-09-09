import React, { useState } from "react";
import "./inputSearchBar.css";
import { Button } from "../Button";

export function InputSearchBar({ width, handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    handleSearch(e);
  };
  const clearSearch = () => {
    setInputValue("");
  };
  return (
    <div className="search-bar-container relative">
      <div className="search-inner d-flex justify-center align-center absolute w-100">
        <input
          className="search-bar "
          style={{ width: `${width}%` }}
          type="text"
          onChange={(e) => inputHandler(e)}
          value={inputValue}
          placeholder="Search gym name here..."
        />
        <Button
          btnProps={{
            btnStyles: {
              width: "100px",
              height: "40px",
              background:
                "linear-gradient(to right, rgb(114,2,2), rgb(230, 41, 41))",
              borderRadius: "10px",
              color: "white",
            },
            innertext: "Clear",
            handler: clearSearch,
          }}
        />
      </div>
    </div>
  );
}
