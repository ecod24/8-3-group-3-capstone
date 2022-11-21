const express = require("express");
const allergies = express.Router();
const db = require("../db/dbConfig");
const {
  getAllergies,
  getAllergy,
  createAllergy,
  updateAllergy,
  deleteAllergy,
} = require("../queries/allergies");

//INDEX
allergies.get("/", async (req, res) => {
  const allAllergies = await getAllergies();
  res.json({ payload: allAllergies });
});

//SHOW
allergies.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allergy = await getAllergy(id);
  if (allergy.id) {
    res.json({ success: true, payload: allergy });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

//CREATE
allergies.post("/", async (req, res) => {
  try {
    const allergy = await createAllergy(req.body);
    res.json({ success: true, payload: allergy });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: "server cannot process request" });
  }
});

// UPDATE
allergies.put("/:id", async (req, res) => {
  try {
    const allergy = await updateAllergy(req.params.id, req.body);
    res.json({ success: true, payload: allergy });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE
allergies.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAllergy = await deleteAllergy(id);
  if (deletedAllergy) {
    if (deletedAllergy.id) {
      res.status(200).json({ success: true, payload: deletedAllergy });
    } else {
      res.status(404).json({ success: false, payload: "Allergy not found" });
    }
  } else {
    console.error(deletedAllergy);
    res.status(500).json({ success: false, payload: "server error" });
  }
});

module.exports = allergies;
