import React, { useState, useEffect } from "react";
import Title from "./Title";
import Projects from "./Projects";
import Footer from "./Footer";

import Info from "./Info";

const App = () => {
  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div style={{display: "inlineBlock"}}>
      <div id="main" className="section-one">
        <div className="bkg"></div>
        <div
          className="skySun"
          style={{ transform: `translateY(${offSetY * 0.9}px)` }}
        ></div>
        <div
          className="second"
          style={{ transform: `translateY(${offSetY * 0.8}px)` }}
        ></div>
        <div
          className="third"
          style={{ transform: `translateY(${offSetY * 0.7}px)` }}
        ></div>
        <div
          className="fourth"
          style={{ transform: `translateY(${offSetY * 0.5}px)` }}
        ></div>
        <div
          className="fifth"
          style={{ transform: `translateY(${offSetY * 0.3}px)` }}
        ></div>

        <div className="sixth">
          <div style={{ transform: `translateY(${offSetY * 0.1}px)` }}>
            <Title offSetY={offSetY} />
          </div>
        </div>
      </div>
      <div style={{width: "100%, minHeight: 300px", marginTop: "-10px", backgroundColor: "#00000", position: "absolute", zIndex: "5"}}>
      </div>
      <div className="hidden-div">WHERE AM I</div>
      <div className="section-two">
        <Projects />
        <Info offSetY={offSetY} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
