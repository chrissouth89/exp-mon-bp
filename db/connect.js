// grab environment variables

require('dotenv').config()

//import mongoose

const mongoose = require('mongoose')

//merced logger for colorful logs

const {log} = require('mercedlogger')

// grab database string

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/database"

////////////////////////////
// Mongoose Config Object
////////////////////////////

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

///////////////////////////////////
// Making the Database Connection
///////////////////////////////////

mongoose.connect(MONGODB_URL, config)

///////////////////////////////////
// Handling Connection Events
///////////////////////////////////

mongoose.connection
    // Event for when Connection opens
    .on('open', () => log.green('STATUS', 'Connected to Mongo'))
    // Event for when Connection closes
    .close('close', () => log.red('STATUS', 'Disconnected from Mongo'))
    // Event for Connection Errors
    .on('error', error => log.red('ERROR', error))

///////////////////////////////////
// Exporting Our Connection
///////////////////////////////////

module.exports = mongoose