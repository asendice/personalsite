import React, { useEffect, useState } from "react";
import { Table, Segment, Header, Icon, Button } from "semantic-ui-react";
import birdMelon from "../img/birdMelon.png";
import branch from "../img/branch.png";
import backendApi from "../apis/backendApi";

const Projects = ({ offSetY }) => {
  const [proj, setProj] = useState([]);

  const getProjects = async () => {
    await backendApi
      .get("/projects")
      .then((response) => {
        if (response) {
          console.log(response, "response");
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => setProj(response.data.message));
  };

  useEffect(() => {
    getProjects();
  }, []);

  const renderProjects = () => {
    return proj.map((prj) => {
      return (
        <Table.Row key={prj.name}>
          <Table.Cell>
            <Header as="h2">{prj.name}</Header>
          </Table.Cell>
          <Table.Cell>
            <Button>Description</Button>
          </Table.Cell>
          <Table.Cell>
            <Button
              color="black"
              href={prj.gitHub}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="github" />
              GitHub
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button
              color="blue"
              href={prj.live}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="rocket" />
              Live Demo
            </Button>
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  return (
    <>
      <div className="project-header-container">
        <h1 style={{ textDecoration: "underline" }}> PROJECTS </h1>
      </div>
      <Segment basic compact className="project-container">
        <Table color="grey" size="large" textAlign="center" unstackable>
          <Table.Body>{renderProjects()}</Table.Body>
        </Table>
      </Segment>
      {/* <img className="branch" src={branch} style={{ transform: `translateY(${offSetY * 0.1}px)` }}></img> */}

      <img className="birdMelon" src={birdMelon} style={{ transform: `translateX(${offSetY * 0.7}px)` }} ></img>
    </>
  );
};

export default Projects;
