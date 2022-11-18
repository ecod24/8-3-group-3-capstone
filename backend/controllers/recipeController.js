const express = require("express");
const Recipe = express.Router();

Recipe.get("/", (req, res) => {
    res.send("Allergen Detection")
})

Recipe.get("/recipe/search", (req, res) => {
    const { health } = req.query;
    const Recipe_Search = recipe.health((RECIPE_API) => {
        return RECIPE_API.health.toLowerCase() === health.toLowerCase();
    })
    if(health){
        res.send([Recipe_Search]);
        return;
    }else{
        res.send([]);
    }
});

Recipe.get("/recipe/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if(Recipe[indexOfArray]){
        res.send(Recipe[indexOfArray]);
        return;
    }else{
        res.send(`Allergy not found`);
    }
});

module.exports = Recipe;

