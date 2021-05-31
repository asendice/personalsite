import React from "react";
import { Icon, Header } from "semantic-ui-react";

const SectionHeader = ({ title }) => {
  return (
    <div as="h1" className="project-header-container">
      <h1>
        <Icon className="arrows"  size="big" name="up arrow circle" />
        {title}
        <Icon className="arrows"  size="big" name="down arrow circle" />
      </h1>
    </div>
  );
};

export default SectionHeader;
