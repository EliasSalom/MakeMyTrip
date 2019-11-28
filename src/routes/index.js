const express = require("express");

const queries = require("../model/queries/queries.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
