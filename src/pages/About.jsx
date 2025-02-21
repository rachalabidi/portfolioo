import React, { Component } from "react";
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import Me from "../components/Me";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <VideoBackground />
          <div className="content">
            <NavBar />       
            <Me />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
