import React from "react";
import "./Home.css";
import HomeData from "./HomeData";
import Scroll from "./Scroll";
import Social from "./Social";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social></Social>

          <Fade left>
            <>
              <div className="home-img"></div>
            </>
          </Fade>

          <HomeData></HomeData>
        </div>
        <Scroll></Scroll>
      </div>
    </section>
  );
};

export default Home;
