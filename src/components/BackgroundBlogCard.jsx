import React, { useState } from "react";
import "./style/BackgroundBlogCard.css";
import Lottie from "react-lottie-player";

const BackgroundBlogCard = ({ image , lottieFile, title, content , isActive  }) => {
  // const [isHovered, setIsHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(isActive); // Default to isActive

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
    className={`card ${isHovered ? "card-hover" : ""}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{ backgroundImage: !lottieFile ? `url(${image})` : "none" }} // Only apply background image if no Lottie file
    >
      {/* Conditionally render either the image or the Lottie animation */}
      {lottieFile ? (
        <Lottie
          loop
          animationData={lottieFile}
          play
          style={{ width: '100%', height: '100%' }}
        />
      ) : null}
      <div className="card-content">
      <h3 className="card-title">{title}</h3>
      {isHovered && <p className="card-text">{content}</p>}
    </div>
  </div>
  );
};

export default BackgroundBlogCard;
