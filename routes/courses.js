const express = require("express");
const router = express.Router();
const cm = require("../controllers/courses");

router.get("/courses", function (req, res, next) {
  const filePath = fileMgmt.getHtmlFilePath("courses-home.html");
  res.sendFile(filePath);
});

router.get("/", cm.getCoursesList);

module.exports = router;
