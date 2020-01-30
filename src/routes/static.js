const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController.js");

router.get("/", staticController.home);
router.get("/products", staticController.products);
router.get("/gallery", staticController.gallery);
router.get("/contact", staticController.contact);
router.get("/about", staticController.about);
router.get("/reviews", staticController.reviews);

module.exports = router;