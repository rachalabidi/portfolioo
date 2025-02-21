

import React, { Component } from "react";
import Slider from "react-slick"; // Import React Slick
import CompareDemo from "../components/CompareDemo";
import AnimatedPinDemo from "../components/AnimatedPinDemo";
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import "../components/style/CardsPagerespo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/style/Websites.css";
class Websites extends Component {
 
  render() {
    const compareItems = [
      {
        firstImage: "carteVisit.png",
        secondImage: "carteVisit2.png", //2000*2000
      },
      {
        firstImage: "Group 1 (3).png",
        secondImage: "Group 2 (3).png",
      },
      {
        firstImage: "UNH.png",
        secondImage: "UNH2.png",
      },
      {
        firstImage: "black.png",
        secondImage: "SCREAM.png",
      },
      {
        firstImage: "black.png",
        secondImage: "TWOO.png",
      },
      {
        firstImage: "black.png",
        secondImage: "DANCE.png",
      },
      {
        firstImage: "black.png",
        secondImage: "HIDE.png",
      },
      {
        firstImage: "black.png",
        secondImage: "CRY.png",
       
      },
      {
        firstImage: "black.png",
        secondImage: "EYE.png",
       
      },
      {
        firstImage: "black.png",
        secondImage: "HEAL.png",
       
      },
      {
        firstImage: "black.png",
        secondImage: "FLAMMO.png",
       
      },
      {
        firstImage: "black.png",
        secondImage: "HAND.png",
       
      },
      {
        firstImage: "black.png",
        secondImage: "END.png",
       
      },
      {
        firstImage: "black.png",
        secondImage: "HOPE.png",
       
      },
    ];
    
    // Settings for React Slick carousel
    const sliderSettings = {
      dots: false, // Enable navigation dots
      infinite: true, // Loop through slides
      speed: 500, // Transition speed in milliseconds
      slidesToShow: 1, // Number of slides to show
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable auto-switching
      autoplaySpeed: 3000, // Time between switches in milliseconds
    };
    
  
    return (
        <div>
           <VideoBackground />
        <div className="content">
          <NavBar />
          <div className="projects-stack">
            <span className="project u"> My Designs</span>
            <span className="project em">My Designs</span>
            <span className="project em">My Designs</span>
            <span className="project em">My Designs</span>
          </div>
          <div className="card-web">
          <Slider {...sliderSettings}>
            {compareItems.map((item, index) => (
  <CompareDemo
              firstImage={item.firstImage}
              secondImage={item.secondImage}
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className=" "

              slideMode="hover"
            />
))}
    </Slider>
  </div>
      </div>
      </div>
    );
  }
}

export default Websites;
