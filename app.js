var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");

// connection to mongodb
mongoose.connect(
  "mongodb://localhost/value-creatives",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    console.log("Connected to Database", err ? err : true);
  }
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is Running on port", PORT));
