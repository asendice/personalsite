import React from "react";
import { Segment, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-scroll";

const Title = ({ offSetY }) => {
  return (
    <Segment basic textAlign="center" className="title">
      <Icon className="footer-icons" size="huge" name="linkedin" />
      <Icon className="footer-icons" size="huge" name="github" />
      <Icon className="footer-icons" size="huge" name="file" />
      <Header style={{ transform: `translateX(${offSetY * -0.6}px)` }} as="h1">
        Dylan Travis front-end web developer
      </Header>
      <Link to="projects" spy={true} smooth={true} duration={2000}>
        <Button
          style={{ transform: `translateX(${offSetY * 0.6}px)` }}
          circular
          content="Projects"
          size="large"
          className="title-buttons"
        />
      </Link>

      <Link to="info" spy={true} smooth={true} duration={2000}>
        <Button
          style={{ transform: `translateX(${offSetY * 0.6}px)` }}
          circular
          content="Info"
          size="large"
          className="title-buttons"
        />
      </Link>
    </Segment>
  );
};

export default Title;
