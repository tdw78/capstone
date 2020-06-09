const express = require("express");
const router = express.Router();
const cartItemController = require("../controllers/cartItemController");

router.post("/products", cartItemController.addToCart);
router.get("/cart", cartItemController.getCart);

module.exports = router;