import React from "react";
import SectionHeader from "./SectionHeader";
import html from "../img/html.png";
import css from "../img/css.png";
import semantic from "../img/semanticui.png";
import js from "../img/JS.png";
import react from "../img/react.png";
import native from "../img/native.png";
import node from "../img/node.png";
import mongo from "../img/mongodb.gif";
import bootstrap from "../img/bootstrap.png";
import github from "../img/github.png";
import redux from "../img/redux.png";
import npm from "../img/npm.png";
import scss from "../img/scss.png"
import python from "../img/python.png"
import { Grid, Segment, Image, Table } from "semantic-ui-react";

const Info = () => {
  const images = [
    {
      pic: html,
      name: "HTML",
    },
    {
      pic: css,
      name: "CSS",
    },
    {
      pic: scss,
      name: "SCSS",
    },
    {
      pic: js,
      name: "JavaScript",
    },
    {
      pic: python,
      name: "Python",
    },
    {
      pic: react,
      name: "React",
    },
    {
      pic: native,
      name: "React Native",
    },
    {
      pic: redux,
      name: "Redux",
    },

    {
      pic: node,
      name: "NodeJS",
    },
    {
      pic: mongo,
      name: "MongoDB",
    },
    {
      pic: semantic,
      name: "Semantic Ui",
    },
    {
      pic: bootstrap,
      name: "Bootstrap",
    },
    {
      pic: github,
      name: "GitHub",
    },
    {
      pic: npm,
      name: "NPM",
    },
  ];

  const renderImagesRowOne = () => {
    const newArr = images.slice(0, 5);
    return newArr.map((img) => {
      return (
        <Table.Cell textAlign="center">
          <Image className="skill-image" src={img.pic} />
          <span style={{ color: "#fff" }}>{img.name}</span>
        </Table.Cell>
      );
    });
  };
  const renderImagesRowTwo = () => {
    const newArr = images.slice(5, 10);
    return newArr.map((img) => {
      return (
        <Table.Cell textAlign="center">
          <Image className="skill-image" src={img.pic} />
          <span style={{ color: "#fff" }}>{img.name}</span>
        </Table.Cell>
      );
    });
  };
  const renderImagesRowThree = () => {
    const newArr = images.slice(10);
    return newArr.map((img) => {
      return (
        <Table.Cell textAlign="center">
          <Image className="skill-image" src={img.pic} />
          <span style={{ color: "#fff" }}>{img.name}</span>
        </Table.Cell>
      );
    });
  };

  return (
    <div id="info" className="info">
      <SectionHeader title="info" />
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment className="tech-skills" basic textAlign="center">
              <h1>Current Technical Skills:</h1>
              <Table unstackable className="skills-table" basic compact>
                <Table.Row>{renderImagesRowOne()}</Table.Row>
                <Table.Row>{renderImagesRowTwo()}</Table.Row>
                <Table.Row>{renderImagesRowThree()}</Table.Row>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Info;
