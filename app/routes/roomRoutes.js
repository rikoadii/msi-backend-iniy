const express = require("express");
const router = express.Router();
const roomController = require("@controllers/roomControllers");


router.get("/room/standard", roomController.getStandardRoomsController);
router.get("/room/medium", roomController.getMediumRoomsController);
router.get("/room/vip", roomController.getVIPRoomsController);

module.exports = router;
