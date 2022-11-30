const db = require("../db/dbConfig.js");

//GET
const getMyProfile = async () => {
  try {
    const myProfile = await db.any("SELECT * FROM myprofile");
    return myProfile;
  } catch (error) {
    return error;
  }
};

const showMyProfile = async (id) => {
  try {
    const myProfile = await db.one("SELECT * FROM myprofile WHERE id=$1", id);
    return myProfile;
  } catch (error) {
    return error;
  }
};

//CREATE
const createMyProfile = async (myprofile) => {
  try {
    let {
      name,
      image,
      email,
      age,
      dietary_restrictions,
      food_preferences,
      sexual_orientation,
      gender,
      religion,
      about_me,
    } = myprofile;
    return await db.one(
      "INSERT INTO myprofile (name, image, email, age, dietary_restrictions, food_preferences, sexual_orientation, gender, religion, about_me) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        name,
        image,
        email,
        age,
        dietary_restrictions,
        food_preferences,
        sexual_orientation,
        gender,
        religion,
        about_me,
      ]
    );
  } catch (error) {
    return error;
  }
};

//UPDATE
const updateMyProfile = async (
  id,
  {
    name,
    image,
    email,
    age,
    dietary_restrictions,
    food_preferences,
    sexual_orientation,
    gender,
    religion,
    about_me,
    ...otherStuff
  }
) => {
  try {
    const updateMyProfile = await db.one(
      "UPDATE myprofile SET name=$1, image=$2, email=$3, age=$4, dietary_restrictions=$5, food_preferences=$6, sexual_orientation=$7, gender=$8, religion=$9, about_me=$10 WHERE id=$11 RETURNING *",
      [
        name,
        image,
        email,
        age,
        dietary_restrictions,
        food_preferences,
        sexual_orientation,
        gender,
        religion,
        about_me,
        id
      ]
    );
    return updateMyProfile;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getMyProfile,
  updateMyProfile,
  createMyProfile,
  showMyProfile,
};
