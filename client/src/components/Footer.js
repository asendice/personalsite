import React from "react";
import { Segment, Divider, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <Segment textAlign="center" className="footer-container">
        <Divider hidden />
        <a
          href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="footer-icons" size="huge" name="linkedin" />
        </a>
        <a
          href="https://www.github.com/asendice"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="footer-icons" size="huge" name="github" />
        </a>
        <a
          href="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="footer-icons" size="huge" name="file" />
        </a>

        <Divider hidden />
        <p style={{ color: "#fff", fontSize: "1rem" }}>
          Dylan Travis | Personal Site | 2021
        </p>
  
        <Divider hidden />
      </Segment>
    </>
    //
  );
};

export default Footer;
