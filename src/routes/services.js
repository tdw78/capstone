const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/services/photography", serviceController.photography);
router.get("/services/music", serviceController.music);
router.get("/services/limos", serviceController.limos);
router.get("/services/catering", serviceController.catering);

module.exports = router;