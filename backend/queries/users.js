const db = require("../db/dbConfig.js");

//GET
const getAllUsers = async () => {
	try {
		const allUsers = await db.any("SELECT * FROM users");
		return allUsers;
	} catch (error) {
		return error;
	}
};

//GET:id
const getUser = async (id) => {
	try {
		const user = await db.one("SELECT * FROM users WHERE id=$1", id);
		return user;
	} catch (error) {
		return error;
	}
};
const getUserByFirebase = async (id) => {
	try {
		const user = await db.one("SELECT * FROM users WHERE firebase_id=$1", id);
		return user;
	} catch (error) {
		return error;
	}
};
//CREATE
const createUser = async (user) => {
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
			about_me,
			firebase_id,
			chat_handle,
		} = user;
		return await db.one(
			"INSERT INTO users (name, image, email, age, dietary_restrictions, food_preferences, sexual_orientation, gender, about_me, firebase_id, chat_handle) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
			[
				name,
				image,
				email,
				age,
				dietary_restrictions,
				food_preferences,
				sexual_orientation,
				gender,
				about_me,
				firebase_id,
				chat_handle,
			]
		);
	} catch (error) {
		return error;
	}
};
//DELETE
const deleteUser = async (id) => {
	try {
		return await db.one("DELETE FROM users WHERE id=$1 RETURNING *", id);
	} catch (error) {
		return error;
	}
};
//UPDATE
const updateUser = async (
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
		about_me,
		firebase_id,
		chat_handle,
	}
) => {
	try {
		return await db.one(
			"UPDATE users SET name=$1, image=$2, email=$3, age=$4, dietary_restrictions=$5, food_preferences=$6, sexual_orientation=$7, gender=$8, about_me=$9, firebase_id=$10, chat_handle=$11 WHERE id=$12 RETURNING *",
			[
				name,
				image,
				email,
				age,
				dietary_restrictions,
				food_preferences,
				sexual_orientation,
				gender,
				about_me,
				firebase_id,
				chat_handle,
				id,
			]
		);
	} catch (error) {
		return error;
	}
};

module.exports = { getAllUsers, getUser, getUserByFirebase, createUser, deleteUser, updateUser };
