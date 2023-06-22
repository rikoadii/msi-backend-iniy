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

const deleteGuestModel = (id_tamu) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM tamu WHERE id_tamu = ?";
    db.query(query, [id_tamu], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

const getGuestByIdModel = (id_tamu) => {
return new Promise((resolve, reject) => {
  const query = "SELECT * FROM tamu WHERE id_tamu = ?";
  db.query(query, [id_tamu], (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results[0]);
    }
  })
})
}

const getKamarByIdModel = (id_room) => {
return new Promise((resolve, reject) => {
  const query = "SELECT * FROM room WHERE id_room = ?";
  db.query(query, [id_room], (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results[0]);
    }
  })
})
}

const getStockByIdModel = (id_stock) => {
return new Promise((resolve, reject) => {
  const query = "SELECT * FROM stock_kamar WHERE id_stock = ?";
  db.query(query, [id_stock], (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results[0]);
    }
  })
})
}

const editGuestModel = (id_tamu, updatedGuest) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE tamu SET ? WHERE id_tamu = ?";
    db.query(query, [updatedGuest, id_tamu], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    })
  })
}

const editStockModel = (id_stock, updatedStock) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE stock_kamar SET ? WHERE id_stock = ?";
    db.query(query, [updatedStock, id_stock], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    })
  })
}

const editKamarModel = (id_room, updatedKamar) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE room SET ? WHERE id_room = ?";
    db.query(query, [updatedKamar, id_room], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    })
  })
}

const addGuestModel = (addGuest) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO tamu SET ?";
    db.query(query, addGuest, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};
const addStockModel = (addStock) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO stock_kamar SET ?";
    db.query(query, addStock, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};
const addKamarModel = (addKamar) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO room SET ?";
    db.query(query, addKamar, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

const deleteCIOModel = (id_cio) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM cio WHERE id_cio = ?";
    db.query(query, [id_cio], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    })
  })
}

const deleteStockModel = (id_stock) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM stock_kamar WHERE id_stock = ?";
    db.query(query, [id_stock], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    })
  })
}
const deleteKamarModel = (id_room) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM room WHERE id_room = ?";
    db.query(query, [id_room], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.affectedRows > 0);
      }
    })
  })
}

const listKamarModel = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM room";
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

const loginAdminModel = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM admin WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
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
  getGuestByIdModel,
  editGuestModel,
  addGuestModel,
  editKamarModel,
  deleteCIOModel,
  deleteStockModel,
  editStockModel,
  listKamarModel,
  getStockByIdModel,
  deleteKamarModel,
  getKamarByIdModel,
  addKamarModel,
  loginAdminModel,
  addStockModel,
};
