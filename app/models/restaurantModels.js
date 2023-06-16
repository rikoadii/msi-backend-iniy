const db = require("@config/database");

const getRestaurantByType = (menu_type) => {
  const query = "SELECT * FROM restaurant WHERE menu_type = ?";
  return new Promise((resolve, reject) => {
    db.query(query, [menu_type], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getRestaurantByType,
};
