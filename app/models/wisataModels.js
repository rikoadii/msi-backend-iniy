const db = require("@config/database");

const getWisataModels = () => {
  const query = "SELECT * FROM wisata";
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

module.exports = {
  getWisataModels,
};
