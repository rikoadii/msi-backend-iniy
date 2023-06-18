const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wtc-hotel",
});


db.connect((err) => {
  if (err) {
    console.error("Kesalahan koneksi MySQL: " + err.stack);
    return;
  }

  console.log("Terhubung ke MySQL");
});

module.exports = db;