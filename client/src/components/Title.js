import React from "react";
import { Segment, Button, Header } from "semantic-ui-react";

const Title = () => {
  return (
    <>
      <Segment basic textAlign="center" className="title">
        <Header style={{ color: "black" }} as="h1">
          Dylan Travis front-end web developer
        </Header>
        <Button content="Projects" size="large" className="title-buttons" />
        <Button content="Info" size="large" className="title-buttons" />
      </Segment>
    </>
  );
};

export default Title;
