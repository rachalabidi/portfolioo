import React, { Component } from 'react';

import VideoBackground from "../components/VideoBackground";
import NavBar from "../components/NavBar";
import Formu from "../components/Formu";
class Contact extends Component {
    render() {
        return (
            <div>
        <div>
          <VideoBackground />
          <div className="content">
            <NavBar />
            <br></br>
            <Formu/>
          </div>
        </div>
      </div>
        );
    }
}

export default Contact;