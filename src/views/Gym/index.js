import React, { useEffect, useState } from "react";
import "./gym.css";
import { Experiences, InputSearchBar } from "../../components/common";
import { Hero } from "../../components/common";
import { AllGyms, GymHelper } from "../../components";

export const Gym = () => {
  const [allGymsData, setAllGymsData] = useState("");
  const [gyms, setGyms] = useState("");

  useEffect(() => {
    if (!gyms) {
      fetch("https://api.wtfup.me/gym/places")
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
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
    <div className="">
      <Hero />
      <InputSearchBar width={90} handleSearch={handleSearch} />
      <div className="show-list">
        <GymHelper handleSearch={handleSearch} />
        <AllGyms nearestGym={gyms} />
      </div>
      <Experiences />
    </div>
  );
};
