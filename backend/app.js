// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/usersController");

// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());
// MIDDLEWARE

// ROUTES
app.get("/", async (request, response) => {
	response.send("Welcome to Table for Two!");
});
app.use("/users", usersController);
app.get("*", (request, response) => {
	response.status(404).send("Route error.");
});
// EXPORT
module.exports = app;
