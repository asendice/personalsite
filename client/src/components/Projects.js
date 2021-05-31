import React, { useEffect, useState } from "react";
import {
  Modal,
  Segment,
  Image,
  Icon,
  Button,
  Card,
  Label,
} from "semantic-ui-react";
import birdMelon from "../img/birdMelon.png";
import birdNaplesYellow from "../img/birdNaplesYellow.png";
import branch from "../img/branch.png";
import backendApi from "../apis/backendApi";

const Projects = ({ offSetY }) => {
  const [proj, setProj] = useState([]);
  const [selectedProj, setSelectedProj] = useState({});
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

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

  const onCardClick = (prj) => {
    setSelectedProj(prj);
    setIndex(0);
    setOpen(true);
  };


  const renderModal = () => {
    if (selectedProj.images) {
      return (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
          centered={false}
        >
          <Modal.Header>{selectedProj.name}</Modal.Header>
          <Modal.Content>
            <Segment basic>{selectedProj.description}</Segment>
            <Segment textAlign="center" basic className="carousel">
              <Image
                className="carousel-image animate one fadeInRight"
                src={selectedProj.images[index]}
              />
              <Button
                basic
                circular
                className="left-arrow-btn"
                onClick={() =>
                  setIndex(
                    index > 0 ? index - 1 : selectedProj.images.length - 1
                  )
                }
              >
                <Icon size="large" name="left arrow" className="left-arrow" />
              </Button>
              <Label className="carousel-index">
                {index + 1}/{selectedProj.images.length}
              </Label>
              <Button
                basic
                circular
                className="right-arrow-btn"
                onClick={() =>
                  setIndex(
                    index < selectedProj.images.length - 1 ? index + 1 : 0
                  )
                }
              >
                <Icon size="large" name="right arrow" className="right-arrow" />
              </Button>
            </Segment>
          </Modal.Content>
          <Modal.Content>
            <Segment basic textAlign="center">
              <Button
                className="card-btn"
                color="black"
                href={selectedProj.gitHub}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="github" />
                GitHub
              </Button>
              <Button
                className="card-btn"
                color="blue"
                href={selectedProj.live}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="rocket" />
                Demo
              </Button>
            </Segment>
          </Modal.Content>
        </Modal>
      );
    }
  };

  const renderCards = () => {
    return proj.map((prj) => {
      return (
        <Card  onClick={() => onCardClick(prj)}>
          <Image className="project-img" src={prj.images[0]} />
          <Card.Content>
            <Card.Header>{prj.name}</Card.Header>
            <Card.Description>{prj.description}</Card.Description>
          </Card.Content>
          <Card.Content extra className="card-buttons">
            <Button
              className="card-btn"
              color="black"
              href={prj.gitHub}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="github" />
              GitHub
            </Button>
            <Button
              className="card-btn"
              color="blue"
              href={prj.live}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="rocket" />
              Demo
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
        <Card.Group centered>{renderCards()}</Card.Group>
      </Segment>
      {/* <img className="branch" src={branch} style={{ transform: `translateY(${offSetY * 0.1}px)` }}></img> */}
      {/* <img
        className="birdNaplesYellow"
        src={birdNaplesYellow}
        style={{ transform: `translateY(${offSetY * 0.2}px)` }}
      ></img>
      <img
        className="birdMelon"
        src={birdMelon}
        style={{ transform: `translateX(${offSetY * 0.7}px)` }}
      ></img> */}
      {renderModal()}
    </div>
  );
};

export default Projects;
