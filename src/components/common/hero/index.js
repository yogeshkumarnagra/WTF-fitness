import React from "react";
import "./hero.css";
import running_girl from "../../../images/running_girl.png";
import running_boy from "../../../images/running_boy.png";

export function Hero() {
  return (
    <div className="hero relative">
      <span className="hero-banner absolute white">Powered</span>
      <div className="absolute d-flex justify-around w-100 h-100">
        <img className="running" src={running_girl} alt="runnig-girl" />
        <img className="running " src={running_boy} alt="runnig-boy" />
      </div>
      <span className="banner-gym absolute">GYM</span>
    </div>
  );
}
