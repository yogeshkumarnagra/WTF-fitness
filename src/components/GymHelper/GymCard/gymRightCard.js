import React from "react";

export const GymRightCard = ({ gym }) => {
  return (
    <div className="gym-card-right w-50">
      <div className="innner-div">
        <div className="heading">{gym.gym_name}</div>
        {gym.rating > 0 && <div>{gym.rating}</div>}
        <div>
          {gym.address1}, {gym.address2}, {gym.city}
        </div>
        <div>
          {" "}
          {gym.duration_text} away | {gym.distance_text}
        </div>
      </div>
      <div className="button-div">
        <button className="submit-button">Book Now</button>
      </div>
    </div>
  );
};
