import React from "react";
import "./experiences.css";
import { Box } from "./box";
import { data } from "../../../utils";

export const Experiences = () => {
  const gymCards = data.gymCards;
  return (
    <div className="experiences d-flex">
      <div className="left-experience w-30">
        <h1 className="white">WTF - Fitness Experiences?</h1>
        <div className="d-flex">
          <div className="expty-red"></div>
          <h1 className="lighter white m-15">@ your regular gym cost</h1>
        </div>
      </div>
      <div className="right-experience w-70">
        <div className="d-flex justify-center align-center w-100 h-100">
          {gymCards?.map((card) => {
            return <Box card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};
