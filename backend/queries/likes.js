const db = require("../db/dbConfig.js");

//GET
const getAllLikes = async () => {
  try {
    const allLikes = await db.any("SELECT * FROM likes");
    return allLikes;
  } catch (error) {
    return error;
  }
};

//GET
const getMatches = async (current_liker_id, match_user_id) => {
  try {
    console.log("Hitting requestMatch query");
    console.log("current-user", current_liker_id, "match-user", match_user_id);
    const sendMatchRequest = await db.one(
      "SELECT * FROM likes WHERE liked_id = $1",
      match_user_id
    );
    return sendMatchRequest;
  } catch (error) {
    console.log("Error from sendMatchRequest query");
  }
};

//GET:id
const getLike = async (id) => {
  try {
    const like = await db.one("SELECT * FROM likes WHERE id=$1", id);
    return like;
  } catch (error) {
    return error;
  }
};

//CREATE
const createLike = async (current_liker_id, current_match_id) => {
  try {
    console.log("Hitting createLike query");
    console.log(
      "current-user",
      current_liker_id,
      "match-user",
      current_match_id
    );
    const createMatchRequest = await db.one(
      "INSERT INTO likes (liker_id, liked_id) VALUES ($1, $2) RETURNING *",
      [current_liker_id, current_match_id]
    );
    return createMatchRequest;
  } catch (error) {
    console.log("Error from createMatchRequest query");
  }
};

//DELETE
const deleteLike = async (id) => {
  try {
    const deletedLike = await db.one(
      "DELETE FROM likes WHERE id=$1 RETURNING *",
      id
    );
    return deletedLike;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllLikes, getLike, createLike, deleteLike, getMatches };
