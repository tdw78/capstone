const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const validation = require("./validation");

router.get("/users/signUp", userController.signUpForm);
router.post("/users", validation.validateUsers, userController.signUp);

router.get("/users/signIn", userController.signInForm);
router.post("/users/signIn", validation.validateUsers, userController.userSignIn);

router.get("/users/signOut", userController.signOut);

module.exports = router;