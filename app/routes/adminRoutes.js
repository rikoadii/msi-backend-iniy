const express = require("express");
const router = express.Router();
const adminControllers = require("@controllers/adminControllers");

router.get("/admin/tamu", adminControllers.getAdminGuestController);
router.get("/admin/cio", adminControllers.getAdminCioListController);
router.get("/admin/stock-kamar", adminControllers.getAdminStockController);
router.get("/admin/admin-list", adminControllers.getAdminListController);
router.delete("/admin/hapusTamu/:id_tamu", adminControllers.deleteGuestController);


module.exports = router;
