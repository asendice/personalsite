import React, { useEffect, useState } from "react";
import {
  Modal,
  Header,
  Segment,
  Image,
  Button,
  Card,
  Label,
  Icon,
} from "semantic-ui-react";
import SectionHeader from "./SectionHeader";
import backendApi from "../apis/backendApi";

const Projects = () => {
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

  const renderSkills = () => {
    return selectedProj.skills.map((skill) => {
      return <Label>{skill} </Label>;
    });
  };

  const renderModal = () => {
    if (selectedProj.images) {
      return (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          centered={false}
        >
          <Modal.Header>
            {selectedProj.name}
            <Icon
              onClick={() => setOpen(false)}
              name="x"
              style={{ float: "right", cursor: "pointer" }}
            />
          </Modal.Header>
          <Modal.Content>
            <Segment basic>{selectedProj.description}</Segment>
            <Segment textAlign="center" basic>
              <Header>Technologies used:</Header>
              {renderSkills()}
            </Segment>
            <Segment textAlign="center" basic className="carousel">
              <Image
                fluid
                className="carousel-image"
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
                className={
                  selectedProj.live !== "none" ? "card-btn" : "only-ghub"
                }
                color="black"
                href={selectedProj.gitHub}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="github" />
                GitHub
              </Button>
              {selectedProj.live !== "none" ? (
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
              ) : null}
            </Segment>
          </Modal.Content>
        </Modal>
      );
    }
  };

  const renderCards = () => {
    return proj.map((prj) => {
      return (
        <Card className="cards" onClick={() => onCardClick(prj)}>
          <Segment textAlign="center" className={`overlay`}>
            <Header as="h2" style={{ color: "#fff", marginTop: "50px" }}>
              <Icon size="big" color="white" name="search plus" />{" "}
            </Header>
          </Segment>
          <Image className="project-img" src={prj.images[0]} />
          <Card.Content>
            <Card.Header>{prj.name}</Card.Header>
          </Card.Content>
          <Card.Content extra className="card-buttons">
            <Button
              className={prj.live !== "none" ? "card-btn" : "only-ghub"}
              style={{ width: "100%" }}
              color="black"
              href={prj.gitHub}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="github" />
              GitHub
            </Button>
            {prj.live !== "none" ? (
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
            ) : null}
          </Card.Content>
        </Card>
      );
    });
  };

  return (
    <div id="projects" className="projects">
      <SectionHeader title="Projects" />
      <Segment basic compact className="project-container">
        <div className="card-group">{renderCards()}</div>
      </Segment>
      {renderModal()}
    </div>
  );
};

export default Projects;
