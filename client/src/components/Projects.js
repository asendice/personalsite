import React, { useEffect, useState } from "react";
import { Table, Segment, Image, Icon, Button, Card } from "semantic-ui-react";
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

  const renderCards = () => {
    return proj.map((prj) => {
      return (
        <Card>
          <Image src={prj.imgOne} />
          <Card.Content>
            <Card.Header>{prj.name}</Card.Header>
            <Card.Description>{prj.description}</Card.Description>
          </Card.Content>
          <Card.Content extra className="card-buttons">
            <Button>More Info</Button>
            <Button
              color="black"
              href={prj.gitHub}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="github" />
              GitHub
            </Button>
            <Button
              color="blue"
              href={prj.live}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="rocket" />
              Live Demo
            </Button>
          </Card.Content>
        </Card>
      );
    });
  };

  return (
    <div id="projects" className="projects">
      <div className="project-header-container">
        <h1> PROJECTS </h1>
      </div>
      <Segment basic compact className="project-container">
        <Card.Group>{renderCards()}</Card.Group>
      </Segment>
      {/* <img className="branch" src={branch} style={{ transform: `translateY(${offSetY * 0.1}px)` }}></img> */}

      <img
        className="birdMelon"
        src={birdMelon}
        style={{ transform: `translateX(${offSetY * 0.7}px)` }}
      ></img>
    </div>
  );
};

export default Projects;
