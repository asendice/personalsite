import React from "react";
import { Segment, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-scroll";

const Title = ({ offSetY }) => {
  return (
    <Segment basic textAlign="center" className="title">
      <Header style={{ transform: `translateX(${offSetY * -0.6}px)` }} as="h1">
        Dylan Travis front-end web developer
      </Header>
      <Link to="projects" spy={true} smooth={true} duration={2000}>
        <Button
          style={{ transform: `translateX(${offSetY * -0.3}px)` }}
          circular
          content="Projects"
          size="large"
          className="title-buttons"
        />
      </Link>

      <Link to="info" spy={true} smooth={true} duration={2000}>
        <Button
          style={{ transform: `translateX(${offSetY * -0.3}px)` }}
          circular
          content="Info"
          size="large"
          className="title-buttons"
        />
      </Link>
      <div className="social-container" style={{ transform: `translateX(${offSetY * -0.2}px)` }}>
      <a
          href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="title-icons" size="huge" name="linkedin" />
        </a>
        <a
          href="https://www.github.com/asendice"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="title-icons" size="huge" name="github" />
        </a>
        <a
          href="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="title-icons" size="huge" name="file" />
        </a>
      </div>
    </Segment>
  );
};

export default Title;
