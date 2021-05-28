import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";
import { Link } from "react-scroll";

const Title = () => {
  return (
    <Segment
      basic
      textAlign="center"
      className="title"
      style={{ zIndex: "10" }}
    >
      <Header style={{ color: "black" }} as="h1">
        Dylan Travis front-end web developer
      </Header>
      <Link to="projects" spy={true} smooth={true} duration={2000}>
        <Button content="Projects" size="large" className="title-buttons" />
      </Link>
      <Link to="info" spy={true} smooth={true} duration={2000}>
        <Button content="Info" size="large" className="title-buttons" />
      </Link>
    </Segment>
  );
};

export default Title;
