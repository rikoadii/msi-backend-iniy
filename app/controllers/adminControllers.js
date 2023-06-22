const Admin = require("@models/adminModels");

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
    res.render("daftarAdmin", { list });
  } catch (error) {
    throw error;
  }
};

const deleteGuestController = async (req, res) => {
  try {
    const { id_tamu } = req.params;
    const success = await Admin.deleteGuestModel(id_tamu);
    if (success) {
      res.redirect("/admin/tamu");
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

const deleteCIOController = async (req, res) => {
  try {
    const { id_cio } = req.params;
    const success = await Admin.deleteCIOModel(id_cio);
    if (success) {
      res.redirect("/admin/tamu");
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

const deleteStockController = async (req, res) => {
  try {
    const { id_stock } = req.params;
    const success = await Admin.deleteStockModel(id_stock);
    if (success) {
      res.redirect("/admin/stock-kamar");
    } else {
      throw error;
    }
  } catch (error) { 
    throw error;
  }
};
const deleteKamarController = async (req, res) => {
  try {
    const { id_room } = req.params;
    const success = await Admin.deleteKamarModel(id_room);
    if (success) {
      res.redirect("/admin/list-kamar");
    } else {
      throw new Error("operasi hapus gagal");
    }
  } catch (error) {
    throw error;
  }
};

const adminFormEditGuestController = async (req, res) => {
  try {
    const { id_stock } = req.params;
    const stock = await Admin.getGuestByIdModel(id_stock);
    res.render("editStock", {stock});
  } catch (error) {
    throw error;
  }
};
const adminFormEditCIOController = async (req, res) => {
  try {
    const { id_cio } = req.params;
    const cio = await Admin.getGuestByIdModel(id_cio);
    res.render("editCIO", {cio});
  } catch (error) {
    throw error;
  }
};




const adminFormEditStockController = async (req, res) => {
  try {
    const { id_stock } = req.params;
    const stock = await Admin.getStockByIdModel(id_stock);
    res.render("editStock", {stock});
  } catch (error) {
    throw error;
  }
};

const adminFormEditKamarController = async (req, res) => {
  try {
    const { id_room } = req.params;
    const kamar = await Admin.getKamarByIdModel(id_room);
    res.render("editKamar", {kamar});
  } catch (error) {
    throw error;
  }
};

const adminEditGuestController = async (req, res) => {
  try {
    const { id_tamu } = req.params;
    const updatedGuest = {
      nama_tamu,
      email,
      nomor_wa,
      kamar_dipesan,
      kelas_kamar,
      type_kamar,
    } = req.body;
    const results = await Admin.editGuestModel(id_tamu, updatedGuest);
    if (results) {
      res.redirect("/admin/tamu");
    } else {
      throw(error)
    }
  } catch (error) {
    throw error;
  }
};

const adminEditStockController = async (req, res) => {
  try {
    const { id_stock } = req.params;
    const updatedStock = {
      kode_kamar,
      jumlah_kamar,
    } = req.body;
    const results = await Admin.editStockModel(id_stock, updatedStock);
    if (results) {
      res.redirect("/admin/stock-kamar");
    } else {
      throw(error)
    }
  } catch (error) {
    throw error;
  }
};

const adminEditCIOController = async (req, res) => {
  try {
    const { id_cio } = req.params;
    const updatedCIO = {
      
    } = req.body;
    const results = await Admin.editStockModel(id_cio, updatedCIO);
    if (results) {
      res.redirect("/admin/tamu");
    } else {
      throw(error)
    }
  } catch (error) {
    throw error;
  }
};
const adminEditKamarController = async (req, res) => {
  try {
    const { id_room } = req.params;
    const updatedKamar = {
      
    } = req.body;
    const results = await Admin.editKamarModel(id_room, updatedKamar);
    if (results) {
      res.redirect("/admin/list-kamar");
    } else {
      throw(error)
    }
  } catch (error) {
    throw error;
  }
};

const adminAddGuestController = async (req, res) => {
  try {
    const addGuest = {
      nama_tamu,
      email,
      nomor_wa,
      kamar_dipesan,
      kelas_kamar,
      type_kamar,
      check_in,
      check_out,
    } = req.body;
    const results = await Admin.addGuestModel(addGuest);
    if (results) {
      res.redirect("/admin/tamu");
    } else {
      throw(error)
    }
  } catch (error) {
    throw error;
  }
};

const adminAddKamarController = async (req, res) => {
  try {
    const addKamar = {
      code_room,
      room_class,
      room_type,
      price,
      detail_room,
    } = req.body;
    const results = await Admin.addKamarModel(addKamar);
    if (results) {
      res.redirect("/admin/list-kamar");
    } else {
      throw(error)
    }
  } catch (error) {
    throw error;
  }
};

const adminAddStockController = async (req, res) => {
  try {
    const addStock = {
      kode_kamar,
      jumlah_kamar,
    } = req.body;
    const results = await Admin.addStockModel(addStock);
    if (results) {
      res.redirect("/admin/list-kamar");
    } else {
      throw(error)
    }
  } catch (error) {
    throw error;
  }
};

const adminListKamarController = async(req, res) => {
  try {
    const kamar = await Admin.listKamarModel();
    res.render("list-kamar", {kamar});
  } catch (error) {
    throw error;
  }
}

const adminFormAddGuestController = (req, res) => {
  res.render("tambah-tamu");
};
const adminFormAddKamarController = (req, res) => {
  res.render("tambah-kamar");
};
const adminFormAddStockController = (req, res) => {
  res.render("tambah-stock");
};

const showLoginForm = (req, res) => {
  res.render("login", { message: "" });
};

const loginAdminController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.loginAdminModel(username, password);

    if (admin) {
      // Login berhasil
      res.redirect("/admin/tamu");
    } else {
      // Login gagal
      res.render("login", { message: "Invalid username or password" });
    }
  } catch (error) {
    throw error;
  }
};



module.exports = {
  getAdminCioListController,
  getAdminGuestController,
  getAdminStockController,
  getAdminListController,
  deleteGuestController,
  adminFormAddGuestController,
  adminFormAddStockController,
  adminFormEditGuestController,
  adminEditGuestController,
  adminAddGuestController,
  deleteCIOController,
  adminEditStockController,
  deleteStockController,
  adminEditCIOController,
  adminListKamarController,
  adminFormEditStockController,
  adminFormEditKamarController,
  deleteKamarController,
  showLoginForm,
  adminFormAddKamarController,
  adminEditKamarController,
  loginAdminController,
  adminAddKamarController,
  adminAddStockController,
};
