const db = require("@config/database");

const getAdminCioModel = () => {
  const query = "SELECT * FROM cio";
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getAdminGuestModel = () => {
  const query = "SELECT * FROM tamu";
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getAdminStockModel = () => {
  const query = "SELECT * FROM stock_kamar";
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getAdminListModel = () => {
  const query = "SELECT * FROM admin";
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const deleteGuestModel = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE * FROM tamu WHERE id_tamu = ?";
    db.query(query, [id_tamu], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

module.exports = {
  getAdminCioModel,
  getAdminGuestModel,
  getAdminStockModel,
  getAdminListModel,
  deleteGuestModel,
};
