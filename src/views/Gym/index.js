import React, { useEffect, useState } from "react";
import "./gym.css";
import { InputSearchBar } from "../../components/common";
import { Hero } from "../../components/common";
import { AllGyms, GymHelper } from "../../components";

export const Gym = () => {
  const [gyms, setGyms] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (!gyms) {
      fetch("https://api.wtfup.me/gym/places")
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            console.log(data.data);
            setGyms(data.data);
          }
        });
    }
  }, []);

  useEffect(() => {
    if (search) {
      fetch("https://api.wtfup.me/gym/places")
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            setGyms(data.data);
          }
        });
    }
  }, [search]);

  const handleSearch = (e) => {
    if (!e.target.value) {
      setSearch(true);
    } else {
      setSearch(false);
      const filterData = gyms.filter((element) =>
        element.city.toLowerCase().includes(e.target.value)
      );
      setGyms(filterData);
    }
  };
  return (
    <div className="">
      <Hero />
      <InputSearchBar width={90} handleSearch={handleSearch} />
      <div className="show-list">
        <GymHelper handleSearch={handleSearch} />
        <AllGyms nearestGym={gyms} />
      </div>
    </div>
  );
};
