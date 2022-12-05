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

//GET:id
const getLike = async (id) => {
  try {
    const like = await db.one("SELECT * FROM users WHERE id=$1", id);
    return like;
  } catch (error) {
    return error;
  }
};
//CREATE
const createLike = async (like) => {
  try {
    let { liked_id, liker_id } = like;
    return await db.one(
      "INSERT INTO likes (liked_id, liker_id) VALUES ($1, $2) RETURNING *",
      [liked_id, liker_id]
    );
  } catch (error) {
    return error;
  }
};
//DELETE
const deleteLike = async (id) => {
  try {
    return await db.one("DELETE FROM likes WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

module.exports = { getAllLikes, getLike, createLike, deleteLike };
