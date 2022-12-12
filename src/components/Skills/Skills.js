import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./Skills.css";
import Fade from "react-reveal/Fade";
const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <SectionHeading title="Skills" description="My technical level" />

      <div className="skills-container container grid">
        <Fade left>
          <Frontend></Frontend>
        </Fade>
        <Fade right>
          <Backend></Backend>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
