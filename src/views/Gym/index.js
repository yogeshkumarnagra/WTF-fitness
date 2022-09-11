import React, { useEffect, useState, useRef } from "react";
import "./gym.css";
import { Experiences, InputSearchBar } from "../../components/common";
import { Hero } from "../../components/common";
import { AllGyms, GymFilters } from "../../components/GymHelper";

export const Gym = () => {
  const [allGymsData, setAllGymsData] = useState("");
  const [gyms, setGyms] = useState("");

  useEffect(() => {
    let url =
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231";
    if (!gyms) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setAllGymsData(data.data);
            setGyms(data.data);
          }
        });
    }
  }, []);

  function handleSearch(e, field) {
    if (!e.target) {
      setGyms(allGymsData);
      return;
    }
    const searchData = allGymsData.filter((element) => {
      return (
        element[field].toLowerCase().includes(e.target.value) ||
        element[field] === e.target.value
      );
    });
    setGyms(searchData);
  }
  function handleFilter(e, field) {
    let filterData = "";
    if (!e.target.value) {
      filterData = allGymsData.filter((ele) =>
        ele.city.toLowerCase().includes(e.target.value)
      );
      setGyms(filterData);
      return;
    }
    if (field === "Cities") {
      filterData = allGymsData.filter((ele) => {
        if (
          e.target.value.includes(
            ele.address1 +
              "," +
              ele.address2 +
              "," +
              ele.country +
              "," +
              ele.pin
          )
        ) {
          return true;
        }
      });
    } else if (field === "Location") {
      filterData = allGymsData.filter((ele) =>
        ele.city.toLowerCase().includes(e.target.value)
      );
    }
    setGyms(filterData);
  }
  return (
    <>
      <section className="gym-wrapper">
        <Hero />
        <section className="middel-section">
          <InputSearchBar
            width={90}
            handleSearch={(e) => handleSearch(e, "gym_name")}
          />
          <div className="filters-gymList">
            <GymFilters
              handleFilter={handleFilter}
              handleSearch={handleSearch}
            />
            <AllGyms nearestGym={gyms} />
          </div>
        </section>
        <Experiences />
      </section>
    </>
  );
};
