import React from "react";
import { GymCard } from "./GymCard";
import "./gymHelper.css";

export const AllGyms = ({ nearestGym }) => {
  console.log(nearestGym);
  // return null;
  return (
    <div className="right-for-list">
      <div className="overflow-auto h-500">
        {nearestGym.length ? (
          nearestGym.map((gym) => <GymCard gym={gym} />)
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
};
