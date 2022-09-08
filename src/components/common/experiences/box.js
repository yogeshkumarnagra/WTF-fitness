import React from "react";
import one from "../../../images/1.svg";
import two from "../../../images/2.svg";
import three from "../../../images/3.svg";
import four from "../../../images/4.svg";

export const Box = ({ card }) => {
  const images = [one, two, three, four];
  return (
    <div className="box white d-flex justify-center align-center">
      <div>
        <img src={images[card.img - 1]} alt="img" />

        <div>{card.content}</div>
      </div>
    </div>
  );
};
