import React from "react";
import { FreeImage } from "./FreeImage";
import { GymRightCard } from "./gymRightCard";
import "./gymCard.css";

export const GymCard = ({ gym }) => {
  return (
    <div
      key={gym.gym_name}
      className="gym-list-div d-flex flex-row  justify-between m-10"
    >
      <FreeImage />
      <GymRightCard gym={gym} />
    </div>
  );
};
