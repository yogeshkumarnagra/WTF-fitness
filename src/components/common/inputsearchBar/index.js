import React from "react";
import "./inputSearchBar.css";

export function InputSearchBar({ width, handleSearch }) {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        style={{ width: `${width}%` }}
        type="text"
        onChange={handleSearch}
        placeholder="Search gym name here..."
      />
    </div>
  );
}
