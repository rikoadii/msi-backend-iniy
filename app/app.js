const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const roomRoutes = require('@routes/roomRoutes');
const restaurantRoutes = require('@routes/restaurantRoutes');
const tourRoutes = require('@routes/wisataRoutes')
const AdminRoutes = require('@routes/AdminRoutes');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.use(roomRoutes);
app.use(restaurantRoutes);
app.use(tourRoutes);
app.use(AdminRoutes);

app.listen(port, () => {
  console.log("Server berjalan pada port " + port);
});
