const express = require("express");
const {
	getAllUsers,
	getUser,
	getUserByFirebase,
	updateUser,
	createUser,
	deleteUser,
} = require("../queries/users");
const usersController = express();

usersController.get("/", async (request, response) => {
	const allUsers = await getAllUsers();
	if (allUsers[0]) {
		response.status(200).json({
			success: true,
			payload: allUsers,
		});
	} else {
		response.status(500).json();
	}
});
//GET by firebase id
usersController.get("/firebase/:id", async (request, response) => {
	const { id } = request.params;
	const user = await getUserByFirebase(id);
	if (user.id) {
		response.status(200).json({
			success: true,
			payload: user,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `Error: no user found with Firebase ID ${id}.`,
		});
	}
});

usersController.get("/:id", async (request, response) => {
	const { id } = request.params;
	const user = await getUser(id);
	if (user.id) {
		response.status(200).json({
			success: true,
			payload: user,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `Error: no user found with ID ${id}.`,
		});
	}
});

usersController.delete("/:id", async (request, response) => {
	const { id } = request.params;
	const deletedUser = await deleteUser(id);
	if (deletedUser) {
		if (deletedUser.id) {
			response.status(200).json({
				success: true,
				payload: deletedUser,
			});
		} else {
			response.status(404).json({
				success: false,
				payload: deletedUser,
			});
		}
	} else {
		response.status(500).json({
			success: false,
			payload: deletedUser,
		});
	}
});
usersController.post("/", async (request, response) => {
	try {
		const user = await createUser(request.body);
		response.json({
			success: true,
			payload: user,
		});
	} catch (error) {
		return error;
	}
});
usersController.put("/:id", async (request, response) => {
	try {
		const { id } = request.params;
		const user = await updateUser(id, request.body);
		response.json({
			success: true,
			payload: user,
		});
	} catch (error) {
		return error;
	}
});
module.exports = usersController;
