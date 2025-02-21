import React, { Component } from "react";
import Slider from "react-slick"; // Import React Slick
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import BackgroundBlogCardrespo from "../components/BackgroundBlogCardrespo";
import "../components/style/CardsPagerespo.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectRespo extends Component {
  render() {
    const cards = [
      {
        href: "/websites",
        image: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Websites",
        content: "I design and develop responsive, high-performing websites that cater to both aesthetics and functionality.",
      },
      {
        href: "/ui-ux",
        image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "UI / UX",
        content: "I create intuitive user interfaces and seamless experiences, ensuring users easily navigate and enjoy digital products.",
      },
      {
        href: "/graphic-design",
        image: "https://images.pexels.com/photos/7818238/pexels-photo-7818238.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Graphic design",
        content: "I craft visually appealing designs, blending creativity with strategic messaging to communicate ideas effectively.",
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
            <span className="project u"> My PROJECTS</span>
            <span className="project em">My PROJECTS</span>
            <span className="project em">My PROJECTS</span>
            <span className="project em">My PROJECTS</span>
          </div>
          <div className="card-container">
            <Slider {...sliderSettings}>
              {cards.map((card, index) => (
                <a href={card.href} key={index}>
                  <BackgroundBlogCardrespo
                    image={card.image}
                    title={card.title}
                    content={card.content}
                  />
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectRespo;
