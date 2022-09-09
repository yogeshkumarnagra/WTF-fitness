import React, { useEffect, useState } from "react";
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
    // let url2 = "https://api.wtfup.me/gym/places";
    if (!gyms) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            // console.log(data);
            setAllGymsData(data.data);
            setGyms(data.data);
          }
        });
    }
  }, []);

  const handleSearch = (e) => {
    const filterData = allGymsData.filter((element) =>
      element.city.toLowerCase().includes(e.target.value)
    );
    setGyms(filterData);
  };
  return (
    <>
      <section className="gym-wrapper">
        <Hero />
        <section className="middel-section">
          <InputSearchBar width={90} handleSearch={handleSearch} />
          <div className="filters-gymList">
            <GymFilters handleSearch={handleSearch} />
            <AllGyms nearestGym={gyms} />
          </div>
        </section>
        <Experiences />
      </section>
    </>
  );
};
