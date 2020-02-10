const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const validation = require("./validation");
const helper = require("../auth/helpers");

router.get("/reviews", reviewController.reviews);
router.get("/reviews/form", reviewController.reviewForm);
router.post("/reviews/form", helper.ensureAuthenticated, reviewController.createReview);

router.get("/reviews/:id", reviewController.show);
router.post("/reviews/:id/destroy", reviewController.destroy);

router.get("/reviews/:id/edit", reviewController.edit);
router.post("/reviews/:id/update", reviewController.update);

module.exports = router;