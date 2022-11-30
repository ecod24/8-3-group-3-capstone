const db = require("../db/dbConfig.js");

const getAllFoods = async () => {
  try {
    const allFoods = await db.any("SELECT * FROM foods");
    return allFoods;
  } catch (error) {
    return error;
  }
};

const getFood = async (id) => {
  try {
    const oneFood = await db.one("SELECT * FROM foods WHERE id=$1", id);
    return oneFood;
  } catch (error) {
    return error;
  }
};

const createFood = async ({ name, image }) => {
  try {
    const newFood = await db.one(
      "INSERT INTO foods (name, image) VALUES($1, $2) RETURNING *",
      [name, image]
    );
    return newFood;
  } catch (error) {
    return error;
  }
};

const updateFood = async (id, { name, image, ...otherStuff }) => {
  try {
    const updateFood = await db.one(
      "UPDATE foods SET name=$1, image=$2 WHERE id=$3 RETURNING *",
      [name, image, id]
    );
    return updateFood;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const deleteFood = async (id) => {
  try {
    const oneFood = await db.one(
      "DELETE FROM foods WHERE id=$1 RETURNING *",
      id
    );
    return oneFood;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
};
