// grab environment variables

require("dotenv").config();

//import mongoose

const mongoose = require("mongoose");

//merced logger for colorful logs

const { log } = require("mercedlogger");

// grab database string

const MONGODB_URL = process.env.MONGODB_URL;

////////////////////////////
// Mongoose Config Object
////////////////////////////

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

///////////////////////////////////
// Making the Database Connection
///////////////////////////////////

mongoose.connect(MONGODB_URL, config);

///////////////////////////////////
// Handling Connection Events
///////////////////////////////////

mongoose.connection
  // event for when connection open
  .on("open", () => log.green("STATUS", "Connected to Mongo"))
  // event for when connection closes
  .on("close", () => log.red("STATUS", "Disconnected from Mongo"))
  // event for errors
  .on("error", (error) => log.red("Error", error));

///////////////////////////////////
// Exporting Our Connection
///////////////////////////////////

module.exports = mongoose;
