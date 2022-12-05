// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/usersController");
const foodsController = require("./controllers/foodsController");
const allergiesController = require("./controllers/allergiesController");
const recipeController = require("./controllers/recipeController");

// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());
// MIDDLEWARE
app.use("/myfoods", foodsController);
app.use("/recipe", recipeController)
// ROUTES
app.get("/", async (request, response) => {
	response.send("Welcome to Table for Two!"); //TODO: show possible routes in response message
});
app.use("/myfoods", foodsController);
app.use("/users", usersController);
app.use("/allergies", allergiesController);
app.get("*", (request, response) => {
	response.status(404).send("Route error.");
});
// EXPORT
module.exports = app;
