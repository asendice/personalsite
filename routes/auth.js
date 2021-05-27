const express = require("express");
const router = express.Router();

const { getProjects } = require("../controllers/auth");

router.get("/projects", getProjects);


module.exports = router;