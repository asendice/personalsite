import React from "react";
import { Segment, Divider, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <Segment  textAlign="center" className="footer-container">
        <Divider hidden/>
        <Icon className="footer-icons" size="huge" name="linkedin" />
        <Icon className="footer-icons" size="huge" name="github" />
        <Icon className="footer-icons" size="huge" name="mail" />
        <p>Dylan Travis | Personal Site</p>
        <p>2021</p>
      </Segment>
    </>
    //
  );
};

export default Footer;
