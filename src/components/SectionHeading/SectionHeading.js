import React from "react";
import Fade from "react-reveal/Fade";
const SectionHeading = ({ title, description }) => {
  return (
    <Fade top>
      <div className="sectionTitleWrapper">
        <h2 className="section-title">{title}</h2>
        <span className="section-subtitle">{description}</span>
      </div>
    </Fade>
  );
};

export default SectionHeading;
