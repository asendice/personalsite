const Project = require("../models/Project");
const Skill = require("../models/Skill");
const AboutMe = require("../models/AboutMe");

// get and return all projects
exports.getProjects = (req, res) => {
  Project.find().then((proj) => {
    if (!proj) {
      return res.status(404).json({
        errors: [{ user: "Projects cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: proj,
      });
    }
  });
};
//get and return all skills 
exports.getSkills = (req, res) => {
  Skill.find().then((skill) => {
    if (!skill) {
      return res.status(404).json({
        errors: [{ user: "Skills cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: skill,
      });
    }
  });
};

//get and return about me
exports.getAboutMe = (req, res) => {
  AboutMe.find().then((txt) => {
    if (!txt) {
      return res.status(404).json({
        errors: [{ user: "AboutMe cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: txt,
      });
    }
  });
};
