import React, { useEffect, useState } from "react";
import { data } from "../../utils";

export const GymFilters = ({ handleFilter, handleSearch }) => {
  const [gymPlaces, setgymPlaces] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [subLocation, setSubLocation] = useState([]);
  const searchFields = data.searchFields;

  const selectCityhandler = (e) => {
    setSelectedCity(e.target.value);
    handleSearch(e, "city");
  };

  const resetHandler = () => {
    setSelectedCity("");
    setSubLocation([]);
  };

  useEffect(() => {
    gymPlaces.map((place) => {
      if (place.city === selectedCity) setSubLocation(place.addressComponent);
      return null;
    });
  }, [selectedCity]);

  useEffect(() => {
    const url = "https://api.wtfup.me/gym/places";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setgymPlaces(data.data);
      });
  }, []);

  useEffect(() => {}, [subLocation]);

  return (
    <>
      <div className="left-for-location">
        <div className={`heading-filters`}>Filters</div>
        <button onClick={resetHandler}>Reset</button>
        {searchFields.length &&
          searchFields.map((field) => {
            return (
              <div
                key={`heading-${field.name.toLocaleLowerCase()}`}
                className={`heading-${field.name.toLocaleLowerCase()} mb-20`}
              >
                {field.name}
                <div>
                  {field.type === "select" ? (
                    <select
                      className="select-search-bar"
                      onChange={selectCityhandler}
                      value={selectedCity}
                    >
                      <option key="select" value="">
                        Select
                      </option>
                      {gymPlaces.length &&
                        gymPlaces.map((place) => {
                          return (
                            <option key={place.value} value={place.value}>
                              {place.city}
                            </option>
                          );
                        })}
                    </select>
                  ) : (
                    field?.inputField.length &&
                    field.inputField.map((txtfield) => {
                      return (
                        <input
                          key={field.name.toLocaleLowerCase()}
                          className={`${field.name.toLocaleLowerCase()}-search-bar`}
                          type={field.type}
                          onChange={
                            field.name === "Price"
                              ? (e) => handleFilter(e, txtfield.placeholder)
                              : (e) => handleFilter(e, field.name)
                          }
                          placeholder={txtfield.placeholder}
                        />
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        {selectedCity && (
          <div>
            <div>Locations</div>
            <select
              className="select-search-bar"
              onChange={(e) => handleFilter(e, "Cities")}
            >
              <option className="option" key="select-option" value="">
                Select
              </option>
              {subLocation.length &&
                subLocation.map((location) => {
                  return (
                    <option className="option" key={location.address1}>
                      {location.address1},{location.address2},{location.country}
                      ,{location.pin}
                    </option>
                  );
                })}
            </select>
          </div>
        )}
      </div>
    </>
  );
};
