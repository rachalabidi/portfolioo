import React, { useEffect } from "react";
import Typed from "typed.js";
import "./style/Typo.css";
import Media from "./Media";

const Typo = () => {
  useEffect(() => {
    // Initialize Typed.js after the component mounts
    const typing = new Typed(".text", {
      strings: [
       
        " Rasha Labidi ",
        " a Software Engineer ",
        " a Web Developer ",
        "a  UI/UX Designer ",
        " a Coffee drinker ",
        " a Self-taught ",

       
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
      showCursor: false, 
    });

    // Clean up Typed instance on component unmount
    return () => {
      typing.destroy();
    };
  }, []);

  return (
    <div>
    <div className="typo">
      <div className="im">I'm </div>
      <div className="text"></div>
    </div>
    <Media />
     </div>

  );
};

export default Typo;
