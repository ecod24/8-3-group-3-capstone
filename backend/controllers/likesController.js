const express = require("express");
const {
  getAllLikes,
  createLike,
  getLike,
  deleteLike,
  getMatches,
} = require("../queries/likes");
const likesController = express();

likesController.post("/", async (req, res) => {
  const { body } = req;
  const matchRequest = await createLike(body.liker_id, body.liked_id);
  matchRequest
    ? res.json({
        success: true,
        payload: matchRequest,
      })
    : res.status(404).send({
        success: false,
        payload: "/this match is not found/",
      });
});

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

likesController.get("/matches", async (req, res) => {
	//get those who liked user with id liked_id
	const { liked_id } = req.body;
	const match = await getMatches(liked_id);
	console.log("are we getting these?: ", liked_id);
	console.log("from statusMatch controller");
	if (match) {
		res.status(200).json({
			success: true,
			payload: match,
		});
	} else {
		res.status(404).json({
			success: false,
			payload: `Page not found.`,
		});
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



likesController.delete("/", async (request, response) => {
  const {liker_id, liked_id} = request.body;
  const deletedLike = await deleteLike(liker_id, liked_id);
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

module.exports = likesController;
