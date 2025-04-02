import React from "react";
import { useMediaQuery } from "react-responsive";
import Projects from "./Projects"; // Desktop Component
import ResPrjt from "./RespPrjt"; // Mobile Component

const ProjectsWrapper = () => {
  // Detect screen width: Mobile < 768px, Desktop >= 768px
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <ResPrjt /> : <Projects />;
};

export default ProjectsWrapper;
