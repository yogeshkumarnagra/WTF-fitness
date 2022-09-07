import React, { useEffect } from "react";
import "./gym.css";
import { InputSearchBar } from "../../components/common";
import { Hero } from "../../components/common";
import { GymHelper } from "../../components";

export const Gym = () => {
  useEffect(() => {
    fetch("https://api.wtfup.me/gym/places")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="">
      <Hero />
      <InputSearchBar width={90} />
      <GymHelper />
    </div>
  );
};
