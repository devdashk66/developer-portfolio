import React from "react";
import { Fade } from "react-reveal";

const AboutMe = () => {
  return (
    <div className="about-info grid">
      <Fade bottom>
        <div className="about-container-box">
          <i className="bx bx-award about-icon"></i>
          <h3 className="about-title">Experience</h3>
          <span className="about-subtitle">1 Years Working</span>
        </div>

        <div className="about-container-box">
          <i className="bx bx-briefcase-alt about-icon"></i>
          <h3 className="about-title">Completed</h3>
          <span className="about-subtitle">12 + Projects</span>
        </div>

        <div className="about-container-box">
          <i className="bx bx-support about-icon"></i>
          <h3 className="about-title">Support</h3>
          <span className="about-subtitle">Online 24/7</span>
        </div>
      </Fade>
    </div>
  );
};

export default AboutMe;
