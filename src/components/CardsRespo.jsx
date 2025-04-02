import React from "react";
import "./style/BackgroundBlogCard.css";
import Lottie from "react-lottie-player";

const CardsRespo = ({ image, lottieFile, title, content, isActive }) => {
  return (
    <div
      className="card card-hover" // Always apply hover class
      style={{ backgroundImage: !lottieFile ? `url(${image})` : "none" }}
    >
      {/* Render Lottie animation if available */}
      {lottieFile ? (
        <Lottie loop animationData={lottieFile} play style={{ width: "100%", height: "100%" }} />
      ) : null}

      <div className="card-contento">
        <h4 className="card-titleo">{title}</h4>
        <p className="card-texto">{content}</p> {/* Always show content */}
      </div>
    </div>
  );
};

export default CardsRespo;
