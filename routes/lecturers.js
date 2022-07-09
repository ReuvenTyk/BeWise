const express = require("express");
const router = express.Router();
const lm = require("../controllers/lecturers");
const path = require("path");
const fileMgmt = require("../shared/fileMgmt");

router.get("/lecturers", function (req, res, next) {
  const filePath = fileMgmt.getHtmlFilePath("home.html");
  res.sendFile(filePath);
});

router.get("/", lm.getLecturersList);

module.exports = router;
