const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;



// Mengizinkan CORS
app.use(cors());

// Menggunakan body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route
app.get("/room/detail/standart", (req, res) => {
  connection.query("SELECT * FROM room WHERE room_class = 'STANDART'", (error, results) => {
    if (error) throw error;
    res.status(200).json({data : results});
  });
});
app.get("/room/detail/medium", (req, res) => {
  connection.query("SELECT * FROM room WHERE room_class = 'MEDIUM'", (error, results) => {
    if (error) throw error;
    res.status(200).json({data : results});
  });
});
app.get("/room/detail/vip", (req, res) => {
  connection.query("SELECT * FROM room WHERE room_class = 'VIP'", (error, results) => {
    if (error) throw error;
    res.status(200).json({data : results});
  });
});
app.get("/restaurant/minuman", (req, res) => {
  connection.query("SELECT * FROM restaurant WHERE menu_type = 'minuman'", (error, results) => {
    if (error) throw error;
    res.status(200).json({data : results});
  });
});
app.get("/restaurant/makanan", (req, res) => {
  connection.query("SELECT * FROM restaurant WHERE menu_type = 'makanan'", (error, results) => {
    if (error) throw error;
    res.status(200).json({data : results});
  });
});

// Menjalankan server
app.listen(port, () => {
  console.log("Server berjalan pada port " + port);
});
