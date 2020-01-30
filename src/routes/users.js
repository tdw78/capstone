const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.get("/users/signUp", userController.signUpForm);
router.get("/users/signIn", userController.signInForm);
router.get("/users/signOut", userController.signOut);

module.exports = router;