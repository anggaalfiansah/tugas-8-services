var express = require("express");
var router = express.Router();
var UserController = require("../Controllers/UserController");

// Get All User
router.route("/").get(UserController.getAllUser);

// Add User
router.route("/").post(UserController.addUser);

// Update Data By ID
router.route("/:id").patch(UserController.updateUserById);

// Delete Data By ID
router.route("/:id").delete(UserController.deleteUserById);

// Get User by Username
router.route("/username/:username").get(UserController.getUserByUsername);

// Get User by email
router.route("/email/:email").get(UserController.getUserByEmail);

// Get User by Phone
router.route("/phone/:phone").get(UserController.getUserByPhone);

// Get User by Address
router.route("/address/:address").get(UserController.getUserByAddress);

module.exports = router;
