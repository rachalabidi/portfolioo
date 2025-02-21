import React, { Component } from "react";
import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import Typo from "../components/Typo";
import Media from "../components/Media";

class home extends Component {
  render() {
    return (
      <div>
        <VideoBackground />
   
        
        <div className="content">
          <NavBar />
            <Typo />
            
            {/* <Media /> */}
        </div>
      </div>
    );
  }
}

export default home;
