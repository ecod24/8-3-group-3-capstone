const usersController = require("../controllers/usersController");
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
//TODO: CREATE
const createUser = async (user) => {};
//TODO: DELETE
const deleteUser = async (id) => {};
//TODO: UPDATE
const updateUser = async (id) => {};

module.exports = { getAllUsers, getUser, createUser, deleteUser, updateUser };
