import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-scroll";

const SectionHeader = ({ title }) => {
  return title === "Projects" ? (
    <div as="h1" className="project-header-container">
      <h1>
        <Link to="main" spy={true} smooth={true} duration={2000}>
          <Icon className="arrows" size="big" name="up arrow circle" />
        </Link>
        {title}
        <Link to="info" spy={true} smooth={true} duration={2000}>
          <Icon className="arrows" size="big" name="down arrow circle" />
        </Link>
      </h1>
    </div>
  ) : (
    <div as="h1" className="project-header-container">
      <h1>
        <Link to="main" spy={true} smooth={true} duration={2000}>
          <Icon className="arrows" size="big" name="arrow alternate circle up outline" />
        </Link>
        {title}
        <Link to="projects" spy={true} smooth={true} duration={2000}>
          <Icon className="arrows" size="big" name="up arrow circle" />
        </Link>
      </h1>
    </div>
  );
};

export default SectionHeader;
