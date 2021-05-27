import React, { useState, useEffect } from "react";
import Projects from "./Projects";

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
    <>
      <div className="section-one">
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
        >
          <div className="title">
            <h1>Dylan Travis</h1>
            <h1>front-end web developer</h1>
          </div>
        </div>
        <div
          className="fourth"
          style={{ transform: `translateY(${offSetY * 0.5}px)` }}
        ></div>
        <div
          className="fifth"
          style={{ transform: `translateY(${offSetY * 0.3}px)` }}
        ></div>
        <div
          className="sixth"
          style={{ transform: `translateY(${offSetY * 0.05}px)` }}
        ></div>
      </div>

      <div className="section-two">
        <Projects />
      </div>
    </>
  );
};

export default App;
