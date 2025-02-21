

import React, { Component } from "react";
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import  BackgroundBlogCard  from "../components/BackgroundBlogCard";
import "../components/style/CardsPage.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null, // Initially no card is selected
    };
  }

  // Method to handle card activation, ensuring one card is always active
  setActiveCard = (index) => {
    this.setState({ activeCard: index });
  };
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
         
          {cards.map((card, index) => (
          <a href={card.href} key={index}>
            <BackgroundBlogCard
              image={card.image}
              title={card.title}
              content={card.content}
              isActive={index === (this.state.activeCard !== null ? this.state.activeCard : 0)} // Inline fallback logic
              onMouseEnter={() => this.setActiveCard(index)} // Optionally set active on hover    
            />
          </a>
        ))}

    </div>
  
        </div>
      </div>
    );
  }
}

export default Projects;
