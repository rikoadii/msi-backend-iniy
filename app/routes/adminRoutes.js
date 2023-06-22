const express = require("express");
const router = express.Router();
const adminControllers = require("@controllers/adminControllers");

router.get("/admin/tamu", adminControllers.getAdminGuestController);
router.get("/admin/cio", adminControllers.getAdminCioListController);
router.get("/admin/stock-kamar", adminControllers.getAdminStockController);
router.get("/admin/admin-list", adminControllers.getAdminListController);
router.get("/admin/hapusTamu/:id_tamu", adminControllers.deleteGuestController);
router.get("/admin/tambah-tamu", adminControllers.adminFormAddGuestController);
router.post("/admin/addtamu", adminControllers.adminAddGuestController)
router.get("/admin/editTamu/:id_tamu", adminControllers.adminFormEditGuestController);
router.post("/admin/editTamu/:id_tamu", adminControllers.adminEditGuestController);
router.get("/admin/hapusCIO/:id_cio", adminControllers.deleteCIOController);
router.post("/admin/editCIO/:id_cio", adminControllers.adminEditCIOController);
router.get("/admin/hapusStock/:id_stock", adminControllers.deleteStockController);
router.post("/admin/editStock/:id_stock", adminControllers.adminEditStockController);
router.get("/admin/editStock/:id_stock", adminControllers.adminFormEditStockController);
router.get("/admin/list-kamar", adminControllers.adminListKamarController);
router.get("/admin/editKamar/:id_room", adminControllers.adminFormEditKamarController);
router.post("/admin/editKamar/:id_room", adminControllers.adminEditKamarController);
router.get("/admin/hapusKamar/:id_room",adminControllers.deleteKamarController);
router.get("/admin/tambah-kamar", adminControllers.adminFormAddKamarController);
router.post("/admin/addKamar", adminControllers.adminAddKamarController);
router.get("/admin/tambah-stock", adminControllers.adminFormAddStockController);
router.post("/admin/addStock", adminControllers.adminAddStockController);
router.get("/login", adminControllers.showLoginForm);
router.post("/login", adminControllers.loginAdminController);



module.exports = router;
