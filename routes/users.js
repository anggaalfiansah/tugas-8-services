var express = require("express");
var router = express.Router();
var UserController = require("../Controllers/UserController");

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://tugas-8-services-jc.herokuapp.com"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Get All User
router.route("/").get(UserController.getAllUser);

// Add User
router.route("/").post(UserController.addUser);

// Update Data By ID
router.route("/:id").patch(UserController.updateUserById);

// Get User by Username
router.route("/username/:username").get(UserController.getUserByUsername);

// Get User by email
router.route("/email/:email").get(UserController.getUserByEmail);

// Get User by Phone
router.route("/phone/:phone").get(UserController.getUserByPhone);

// Get User by Address
router.route("/address/:address").get(UserController.getUserByAddress);

module.exports = router;
