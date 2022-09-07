import React from "react";
import "./inputSearchBar.css";

export function InputSearchBar({ width }) {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        style={{ width: `${width}%` }}
        type="text"
        placeholder="Search gym name here..."
      />
    </div>
  );
}
