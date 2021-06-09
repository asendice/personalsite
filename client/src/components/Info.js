import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import backendApi from "../apis/backendApi";
import { Grid, Segment, Image, Table } from "semantic-ui-react";

const Info = () => {
  const [skills, setSkills] = useState([]);
  const [width, setWidth] = useState(0);

  console.log(width, "width");

  const getSkills = async () => {
    await backendApi
      .get("/skills")
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
      .then((response) => setSkills(response.data.message));
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    getSkills();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderImagesRow = (newArr) => {
    return newArr.map((img) => {
      return (
        <Table.Cell>
          <div style={{margin: "auto"}}>
            <Image className="skill-image" src={img.pic} />
            <span style={{ color: "#fff" }}>{img.name}</span>
          </div>
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
            <Segment padded="very" textAlign="center" basic>
              <h1>About Me</h1>
              <p style={{ color: "grey", fontSize: "1.5rem" }}>
                Hello, my name is{" "}
                <a
                  href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Dylan
                </a>
                . Thank you for visiting my portfolio site. I developed a
                passion for coding in early 2017. Python was the first
                programming language that I decided to learn and ever since then
                I have been hooked. I attended a coding bootcamp{" "}
                <a
                  href="https://www.nucamp.co/community/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  NucampCo
                </a>{" "}
                in 2019 and early 2020 and received two certificates of
                completion from their Web Development Fundamentals Course
                (HTML/CSS/JS/Bootstrap) and their{" "}
                <a
                  href="https://dtravmysite.s3-us-west-1.amazonaws.com/Front_End_Certificate_Dylan.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  Front End Web and Mobile Development Course
                </a>{" "}
                (React/React-Native/Redux/SCSS). My favorite part about
                developing web applications is the process between, being faced
                with a problem I may not directly know how to solve and arriving
                at a solution for that problem. I will uniquely bring value to
                your team, with my background as a store manager. I have strong
                communication, leadership, and time management skills that will
                accelerate any learning curve and help your team achieve
                deadlines. If you would like to work with me, please call or{" "}
                <a
                  href="mailto:dylantravisdev@gmail.com?subject=We are interested in hiring you!"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="links"
                >
                  email
                </a>
                .
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
              <Segment fluid basic>
                <Table textAlign="center" basic unstackable>
                  <Table.Body>
                    <Table.Row>{renderImagesRow(skills.slice(0, 3))}</Table.Row>
                    <Table.Row>
                      {" "}
                      {renderImagesRow(skills.slice(3, 6))}
                    </Table.Row>
                    <Table.Row>{renderImagesRow(skills.slice(6, 9))}</Table.Row>
                    <Table.Row>
                      {renderImagesRow(skills.slice(9, 12))}
                    </Table.Row>
                    <Table.Row> {renderImagesRow(skills.slice(12))}</Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Segment textAlign="center" basic className="contact-me">
            <h1>Contact Me</h1>
            <a
              href="mailto:dylantravisdev@gmail.com?subject=We are interested in hiring you!"
              rel="noopener noreferrer"
              target="_blank"
              className="links"
              style={{ color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}
            >
              dylantravisdev@gmail.com
            </a>
            <p
              style={{ color: "#fff", fontSize: "1.5rem" }}
            >{`775-203-4364 `}</p>
          </Segment>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Info;
