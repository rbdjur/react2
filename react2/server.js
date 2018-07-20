const express = require("express");
const path = require("path")
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const request = require("request");
const axios = require("axios");
const logger = require("morgan");
const router = require("./routes/Routes")

// create a port
const PORT = process.env.PORT || 3000;

const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ useNewUrlParser: true }));

// Set up a static folder (public) for our web app
app.use(express.static("public"));
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact";

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

app.use(router);

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
