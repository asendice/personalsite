import React, { useState, useEffect } from "react";
import Title from "./Title";
import Projects from "./Projects";
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
    <>
      <div className="section-one">
        <div className="bkg"></div>
        <div
          className="skySun"
          style={{ transform: `translateY(${offSetY * 0.9}px)` }}
        >
          {" "}
        </div>
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
          <div
            className="title-container"
            style={{ transform: `translateY(${offSetY * 0.3}px)` }}
          >
            <Title />
          </div>
        </div>
      </div>

      <div className="section-two">
        <Projects offSetY={offSetY} />
      </div>

      <div className="section-three">
        <Info />
      </div>
    </>
  );
};

export default App;
