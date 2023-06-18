const express = require("express");
const router = express.Router();
const wisata = require("@controllers/wisataControllers");

router.get("/wisata", wisata.getWisataController);

module.exports = router;
