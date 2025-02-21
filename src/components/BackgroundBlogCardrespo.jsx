import React from "react";
import "./style/BackgroundBlogCardrespo.css";
import Lottie from "react-lottie-player";

const BackgroundBlogCardrespo = ({ image, lottieFile, title, content }) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: !lottieFile ? `url(${image})` : "none" }} // Only apply background image if no Lottie file
    >
      {/* Conditionally render either the image or the Lottie animation */}
      {lottieFile ? (
        <Lottie
          loop
          animationData={lottieFile}
          play
          style={{ width: "100%", height: "100%" }}
        />
      ) : null}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default BackgroundBlogCardrespo;
