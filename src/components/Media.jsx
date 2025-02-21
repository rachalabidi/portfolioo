import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./style/media.css";

class Media extends Component {
  render() {
    return (
      <ul className="media-list">
        <li>
          <a href="https://github.com/rachalabidi" id="profile-link0">
            <i className="fab fa-github-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100015011318117">
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rash__elle_/" id="profile-link1">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rashalabidi" id="profile-link2">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Media;
