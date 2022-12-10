const db = require("../db/dbConfig.js");

//GET
const getAllLikes = async (match_user_id) => {
	try {
		const allLikes = await db.any("SELECT * FROM likes WHERE liker_id = $1", match_user_id);
		return allLikes;
	} catch (error) {
		return error;
	}
};

//GET
const getMatches = async (match_user_id) => {
	try {
		const sendMatchRequest = await db.any(
			"SELECT * FROM likes WHERE liked_id = $1",
			match_user_id
		);
		return sendMatchRequest;
	} catch (error) {
		console.log("Error from sendMatchRequest query: ", error);
	}
};

//GET
const getBidirectionalMatches = async (user1, user2) => {
	try {
		const forwardMatch = await db.one("SELECT * FROM likes WHERE liked_id=$1 AND liker_id=$2", [
			user1,
			user2,
		]);
		const reverseMatch = await db.one("SELECT * FROM likes WHERE liked_id=$1 AND liker_id=$2", [
			user2,
			user1,
		]);
		return { forwardMatch, reverseMatch };
	} catch (error) {
		console.log("This is not a bidrectional match. Try another pair of users.");
	}
};

//GET:id
const getLike = async (id) => {
	try {
		const like = await db.one("SELECT * FROM likes WHERE liked_id=$1", id);
		return like;
	} catch (error) {
		return error;
	}
};

//CREATE
const createLike = async (current_liker_id, current_match_id) => {
	try {
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
const deleteLike = async (liker_id, liked_id) => {
	try {
		const deletedLike = await db.one(
			"DELETE FROM likes WHERE liked_id=$1 AND liker_id=$2 RETURNING *",
			[liked_id, liker_id]
		);
		return deletedLike;
	} catch (error) {
		return error;
	}
};

module.exports = {
	getAllLikes,
	getLike,
	createLike,
	deleteLike,
	getMatches,
	getBidirectionalMatches,
};
