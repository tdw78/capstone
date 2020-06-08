const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products/tables_chairs", productController.tablesChairs);
router.get("/products/centerpieces", productController.centerpieces);
router.get("/products/invitations", productController.invitations);
router.get("/products/bouquets", productController.bouquets);

//router.get("/products/cart/:id", productController.addToCart);

module.exports = router;