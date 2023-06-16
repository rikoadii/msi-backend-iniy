const mysql = require("mysql");

// Konfigurasi MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wtc-hotel",
});

// Menghubungkan ke MySQL
db.connect((err) => {
  if (err) {
    console.error("Kesalahan koneksi MySQL: " + err.stack);
    return;
  }

  console.log("Terhubung ke MySQL");
});

module.exports = db;