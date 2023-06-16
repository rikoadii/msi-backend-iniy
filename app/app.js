const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const roomRoutes = require('@routes/roomRoutes');
const restaurantRoutes = require('@routes/restaurantRoutes')

app.use(cors());

// Menggunakan body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(roomRoutes);
app.use(restaurantRoutes);

app.listen(port, () => {
  console.log("Server berjalan pada port " + port);
});
