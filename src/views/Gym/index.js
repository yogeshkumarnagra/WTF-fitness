import React, { useEffect } from "react";
import "./gym.css";
import { InputSearchBar } from "../../components/common";
import { Hero } from "../../components/common";

export const Gym = () => {
  useEffect(() => {
    fetch("https://api.wtfup.me/gym/places")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <Hero />
      <InputSearchBar width={90} />
      <div className="show-list">
        <div className="left-for-location">
          <div className="heading-filter">Filters</div>
          <div className="heading-location">
            Location
            <div>
              <input
                className="location-search-bar"
                type="text"
                placeholder="Enter location"
              />
            </div>
          </div>
          <div className="heading-location">
            Price
            <div>
              <input
                className="price-search-bar"
                type="text"
                placeholder="Min"
              />
              <input
                className="price-search-bar"
                type="text"
                placeholder="Max"
              />
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
          </div>
        </div>
        <div className="right-for-list"></div>
      </div>
    </div>
  );
};
