import React, { Component } from "react";
import "./style/me.css";

class Me extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="text-paragraph">
          <p>
            {" "}
            Hi, I'm Rasha, <span class="highlight"> a Software Engineer and UI/UX Designer</span>.
             I blend coding and design to create intuitive, user-friendly digital experiences. With expertise in various programming languages and design tools, I focus on developing projects that are both functional and visually engaging. Let’s connect and build something amazing together!


          </p>
        </div>

        <div className="loader">
          <div className="cercle-loader">
            <img
              src={require("./web-design_13191281.png")}
              alt="Static Icon 1"
              class="icon1"
            />
            <img
              src={require("./orbit_11378693.png")}
              alt="Static Icon 2"
              class="icon2"
            />
            <img
              src={require("./coding-language_2721614.png")}
              alt="Static Icon 3"
              class="icon3"
            />
            <img
              src={require("./sitemap_3395003.png")}
              alt="Static Icon 2"
              class="icon4"
            />
            <img
              src={require("./server-storage_11748373.png")}
              alt="Static Icon 3"
              class="icon5"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
