const express = require("express");
const {
  handleGetAllUsers,
  handlegetUserByID,
  updateUserByID,
  deleteUserByID,
  handleCreateNewUser,
} = require("../controller/user");
const router = express.Router();

router
  .route("/:id")
  .get(handlegetUserByID)
  .patch(updateUserByID)
  .delete(deleteUserByID);

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

module.exports = router;
