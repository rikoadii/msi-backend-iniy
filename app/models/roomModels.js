const db = require("@config/database");

const getRoomsByClass = (roomClass) => {
  const query = "SELECT * FROM room WHERE room_class = ?";
  return new Promise((resolve, reject) => {
    db.query(query, [roomClass], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getRoomsByClass,
};
