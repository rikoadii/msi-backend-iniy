const express = require("express");
const router = express.Router();
const restaurantController = require("@controllers/restaurantControllers");

router.get("/restaurant/minuman", restaurantController.getMinumanListController);
router.get("/restaurant/makanan", restaurantController.getMakananListController);


module.exports = router;
