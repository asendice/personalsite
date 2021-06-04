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
import scss from "../img/scss.png";
import python from "../img/python.png";
import express from "../img/express.png";
import { Grid, Segment, Image, Table } from "semantic-ui-react";

const Info = ({ offSetY }) => {
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
      pic: express,
      name: "Express",
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

  const renderImagesRow = (newArr) => {
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
            <Segment padded="very" textAlign="center" basic className="tech-skills">
              <h1>About Me</h1>
              <p style={{ color: "#fff", fontSize: "1.5rem" }}>
                {" "}
                Hello, my name is Dylan and thank you for visiting my portfolio
                page. I've attended Nucamp Co's coding bootcamp and have taken their Web Dev Fundamentals, and Nucamp's Full-Stack
                courses, receiving  completion certifcates from both courses. I have been coding
                for just over three years and have decided on pursuing it has a careeer. {" "}
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment
              raised
              compact
              basic
              size="small"
              className="tech-skills"
              textAlign="center"
            >
              <h1>Current Technical Skills:</h1>
              <Table basic="very" compact collapsing unstackable>
                <Table.Body>
                  <Table.Row>{renderImagesRow(images.slice(0, 5))}</Table.Row>
                  <Table.Row>{renderImagesRow(images.slice(5, 10))}</Table.Row>
                  <Table.Row>{renderImagesRow(images.slice(10))}</Table.Row>
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Info;
