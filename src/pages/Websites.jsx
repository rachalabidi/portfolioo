

import React, { Component } from "react";
import Slider from "react-slick"; // Import React Slick

import AnimatedPinDemo from "../components/AnimatedPinDemo";
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import "../components/style/CardsPagerespo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/style/Websites.css";
class Websites extends Component {
 
  render() {
    const animatedPinsData = [
   
    
      {
        title: "aman.com",
        href: "https://aman2024.netlify.app/",
        h3Text: "AMAN",
        spanText: "The digital platform for booking home services.",
        imageSrc: "df.PNG"
      },
      {
        title: "Modern.com",
        href: "https://modern2500.netlify.app/",
        h3Text: "Modern",
        spanText: "Landing page of a company offering custom interior design and architecture.",
        imageSrc: "modern.png"
      },
      {
        title: "Sky Peeker",
        href: "https://skypeekerweather.netlify.app/",
        h3Text: "Sky Peeker",
        spanText: "A weather and calendar site providing real-time weather updates and calendar integration.",
        imageSrc: "sky.png"
      },
    
      {
        title: "Start Coding Club",
        href: "https://sccsitesscc.netlify.app/",
        h3Text: "Start Coding Club",
        spanText: "A website for a coding club.",
        imageSrc: "scc.png"
      }
      ,
    
      {
        title: "Edu Uc2 Cs",
        href: "https://uc2softwareenginerrashalabidi.netlify.app/",
        h3Text: "Edu Uc2 Cs",
        spanText: "Courses and PDFs for UC2 students in software engineering.",
        imageSrc: "sf.png"
      }
      
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
            <span className="project u"> My websites</span>
            <span className="project em">My websites</span>
            <span className="project em">My websites</span>
            <span className="project em">My websites</span>
          </div>
          <div className="card-web">
            <Slider {...sliderSettings}>
            {animatedPinsData.map((pin, index) => (
  <AnimatedPinDemo
    key={index}
    title={pin.title}
    href={pin.href}
    h3Text={pin.h3Text}
    spanText={pin.spanText}
    imageSrc={pin.imageSrc}
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
