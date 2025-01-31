import React from "react";
import leftArrow from "../Slider/icons/left-arrow.svg";
import rightArrow from "../Slider/icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={ direction  === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
}
