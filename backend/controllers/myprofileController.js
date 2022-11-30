const express = require("express");
const {
  getMyProfile,
  showMyProfile,
  updateMyProfile,
  createMyProfile,
} = require("../queries/myprofile");
const myProfileController = express();

//GET
myProfileController.get("/", async (request, response) => {
  const myProfile = await getMyProfile();
  if (myProfile[0]) {
    response.status(200).json({
      success: true,
      payload: myProfile,
    });
  } else {
    response.status(500).json();
  }
});

//SHOW
myProfileController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const myProfile = await showMyProfile(id);
  if (myProfile.id) {
    res.json({ success: true, payload: myProfile });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

//POST
myProfileController.post("/create", async (request, response) => {
  try {
    const myProfile = await createMyProfile(request.body);
    response.json({
      success: true,
      payload: myProfile,
    });
  } catch (error) {
    return error;
  }
});

//PUT
myProfileController.put("/:id", async (request, response) => {
  try {
    const myProfile = await updateMyProfile(request.params.id, request.body);
    response.json({
      success: true,
      payload: myProfile,
    });
  } catch (error) {
    return error;
  }
});

module.exports = myProfileController;
