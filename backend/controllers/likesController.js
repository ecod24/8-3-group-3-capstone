const express = require("express");
const {
  getAllLikes,
  getLike,
  createLike,
  deleteLike,
} = require("../queries/likes");
const likesController = express();

likesController.get("/", async (request, response) => {
  const allLikes = await getAllLikes();
  if (allLikes[0]) {
    response.status(200).json({
      success: true,
      payload: allLikes,
    });
  } else {
    response.status(500).json();
  }
});

likesController.get("/:id", async (request, response) => {
  const { id } = request.params;
  const like = await getLike(id);
  if (like.id) {
    response.status(200).json({
      success: true,
      payload: like,
    });
  } else {
    response.status(404).json({
      success: false,
      id: id,
      payload: `Error: no user found with ID ${id}.`,
    });
  }
});

likesController.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const deletedLike = await deleteLike(id);
  if (deletedLike) {
    if (deletedLike.id) {
      response.status(200).json({
        success: true,
        payload: deletedLike,
      });
    } else {
      response.status(404).json({
        success: false,
        payload: deletedLike,
      });
    }
  } else {
    response.status(500).json({
      success: false,
      payload: deletedLike,
    });
  }
});
likesController.post("/", async (request, response) => {
  try {
    const like = await createLike(request.body);
    response.json({
      success: true,
      payload: like,
    });
  } catch (error) {
    return error;
  }
});

module.exports = likesController;
