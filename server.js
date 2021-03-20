// grab environment variables

require("dotenv").config()

// IMPORT EXPRESS

const express = require("express")

// IMPORT DATABASE CONNECTION

const mongoose = require("./db/connect")

// IMPORT MERCED LOGGER

const { log } = require("mercedlogger")

//IMPORT MIDDLEWARE

const methodOverride = require("method-override")
const morgan = require("morgan")
const cors = require("cors")

// GET PORT FROM ENV OR DEFAULT PORT

const PORT = process.env.PORT || "2021"

/////////////////////////////////////
// Create Express Application Object
/////////////////////////////////////

const app = express()

/////////////////////////////////////
// Set the View Engine
/////////////////////////////////////

app.set("view engine", "ejs")

/////////////////////////////////////
// Setup Middleware
/////////////////////////////////////

// Prevent Cors Errors if building an API

app.use(cors())

// Swap method of requests with _method query

app.use(methodOverride("_method"))

// serve the public folder as static

app.use(express.static("public"))

// Request Logging

app.use(morgan("tiny"))

// Parse json bodies

app.use(express.json())

//parse bodies from form submissions

app.use(express.urlencoded({ extended: false })) 

/////////////////////////////////////
// Routes and Routers
/////////////////////////////////////

// Test Route

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>")
})

/////////////////////////////////////
// App Listener
/////////////////////////////////////

app.listen(PORT, () =>
  log.white("🚀 Server Launch 🚀", `Listening on Port ${PORT}`)
)