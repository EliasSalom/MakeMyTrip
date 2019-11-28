const express = require("express");

const queries = require("../model/queries/queries.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/tripmaker", (req, res) => {
  res.render("tripmaker");
});

router.get("/addtrip", (req, res) => {
  res.render("addtrip");
});

router.get("/result", (req, res) => {
  res.render("result");
});

router.get("/ThankYou", (req, res) => {
  res.render("ThankYou");
});

module.exports = router;
