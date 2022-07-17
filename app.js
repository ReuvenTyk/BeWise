var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const headers = require("./middleware/headers");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var lecturersRouter = require("./routes/lecturers");
var coursesRouter = require("./routes/courses");

var app = express();
app.use(headers);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/lecturers", lecturersRouter);
app.use("/courses", coursesRouter);

module.exports = app;
