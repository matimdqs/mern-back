var express = require('express');
var path = require('path');
var cors = require('cors');

// Import the mongoose module
const mongoose = require("mongoose");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

//Use mongoose with native Node Promise.
mongoose.Promise = global.Promise;

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/merndb";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var launches = require('./routes/launches');
var favorites = require('./routes/favorites');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/launches', launches);
app.use('/api/v1/favorites', favorites);

module.exports = app;