const Admin = require("@models/adminModels");
const { deleteGuestModel } = require("../models/adminModels");

const getAdminCioListController = async (req, res) => {
  try {
    const cio = await Admin.getAdminCioModel();
    res.render("checkinOut", { cio });
  } catch (error) {
    throw error;
  }
};

const getAdminGuestController = async (req, res) => {
  try {
    const guest = await Admin.getAdminGuestModel();
    res.render("bukuTamu", { guest });
  } catch (error) {
    throw error;
  }
};

const getAdminStockController = async (req, res) => {
  try {
    const stock = await Admin.getAdminStockModel();
    res.render("stockKamar", { stock });
  } catch (error) {
    throw error;
  }
};

const getAdminListController = async (req, res) => {
  try {
    const list = await Admin.getAdminListModel();
    res.render("daftarAdmin", {list})
  } catch (error) {
    throw error;
  }
}

const deleteGuestController = async (req, res) => {
  try {
    const {id_tamu} = req.params;
    const success = await Admin.deleteGuestModel(id_tamu);
    if (success) {
      res.redirect("/admin/tamu");
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}






module.exports = {
  getAdminCioListController,
  getAdminGuestController,
  getAdminStockController,
  getAdminListController,
  deleteGuestController,
};
