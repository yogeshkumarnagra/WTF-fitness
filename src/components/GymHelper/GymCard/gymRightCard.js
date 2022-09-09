import React from "react";
import { Button } from "../../common";

export const GymRightCard = ({ gym }) => {
  const handler = () => {};
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
        <Button
          btnProps={{
            btnStyles: {
              width: "150px",
              height: "50px",
              background:
                "linear-gradient(to right, rgb(114,2,2), rgb(230, 41, 41))",
              borderRadius: "4px",
              color: "white",
            },
            innertext: "Book Now",
            handler: handler,
          }}
        />
      </div>
    </div>
  );
};
