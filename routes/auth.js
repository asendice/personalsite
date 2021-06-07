const express = require("express");
const router = express.Router();

const { getProjects, getSkills, getAboutMe } = require("../controllers/auth");

router.get("/projects", getProjects);
router.get("/skills", getSkills);
router.get("/aboutme", getAboutMe);


module.exports = router;