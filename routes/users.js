var express = require("express");
var cors = require('cors');
var router = express.Router();
var UserController = require("../Controllers/UserController");

// Get All User
router
  .route("/", cors())
  .get(UserController.getAllUser);

// Add User
router
  .route("/", cors())
  .post(UserController.addUser);

// Update Data By ID
router
  .route("/:id", cors())
  .patch(UserController.updateUserById);

// Get User by Username
router
  .route("/username/:username", cors())
  .get(UserController.getUserByUsername);

// Get User by email
router
  .route("/email/:email", cors())
  .get(UserController.getUserByEmail);

// Get User by Phone
router
  .route("/phone/:phone", cors())
  .get(UserController.getUserByPhone);

// Get User by Address
router
  .route("/address/:address", cors())
  .get(UserController.getUserByAddress);

module.exports = router;
