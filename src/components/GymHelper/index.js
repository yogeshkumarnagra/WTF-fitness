import React from "react";
import { data } from "../../utils";

export const GymHelper = () => {
  const searchFields = data.searchFields;
  return (
    <div className="show-list">
      <div className="left-for-location">
        <div className={`heading-filters`}>Filters</div>
        {searchFields.map((field) => {
          return (
            <>
              <div
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
                          className={`${field.name.toLocaleLowerCase()}-search-bar`}
                          type={field.type}
                          placeholder={txtfield.placeholder}
                        />
                      );
                    })
                  )}
                </div>
              </div>
            </>
          );
        })}
        {/* <div className="heading-location">
          Price
          <div>
            <input className="price-search-bar" type="text" placeholder="Min" />
            <input className="price-search-bar" type="text" placeholder="Max" />
          </div>
        </div>
        <div className="heading-location">
          Cities
          <div>
            <select className="select-search-bar" name="City" id="cars">
              <option value="">Select City</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div> */}
      </div>
      <div className="right-for-list"></div>
    </div>
  );
};
