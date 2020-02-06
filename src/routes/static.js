const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController.js");

router.get("/", staticController.home);
router.get("/products", staticController.products);
router.get("/gallery", staticController.gallery);
router.get("/contact", staticController.contact);
router.get("/about", staticController.about);
router.get("/reviews", staticController.reviews);

router.get("/gallery/decorations", staticController.decorations);
router.get("/gallery/decorations/decorSlideshow", staticController.decorSlideshow);

router.get("/gallery/cakes", staticController.cakes);
router.get("/gallery/cakes/cakeSlideshow", staticController.cakeSlideshow);

router.get("/gallery/catering", staticController.catering);
router.get("/gallery/catering/cateringSlideshow", staticController.cateringSlideshow);

router.get("/gallery/dresses", staticController.dresses);
router.get("/gallery/dresses/dressSlideshow", staticController.dressSlideshow);

router.get("/gallery/reception", staticController.reception);
router.get("/gallery/reception/receptionSlideshow", staticController.receptionSlideshow);

router.get("/gallery/invitations", staticController.invitations);
router.get("/gallery/invitations/inviteSlideshow", staticController.inviteSlideshow);

module.exports = router;