import React from "react";
import { data } from "../../utils";

export const GymFilters = ({ handleSearch }) => {
  const searchFields = data.searchFields;
  return (
    <>
      <div className="left-for-location">
        <div className={`heading-filters`}>Filters</div>
        {searchFields.map((field) => {
          return (
            <div
              key={`heading-${field.name.toLocaleLowerCase()}`}
              className={`heading-${field.name.toLocaleLowerCase()} mb-20`}
            >
              {field.name}
              <div>
                {field.type === "select" ? (
                  <select className="select-search-bar">
                    {field.selectFields.map((sltField) => {
                      return (
                        <option key={sltField.value} value={sltField.value}>
                          {sltField.option}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  field.inputField.map((txtfield) => {
                    return (
                      <input
                        key={field.name.toLocaleLowerCase()}
                        className={`${field.name.toLocaleLowerCase()}-search-bar`}
                        type={field.type}
                        onChange={field.name === "Location" ? handleSearch : ""}
                        placeholder={txtfield.placeholder}
                      />
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
