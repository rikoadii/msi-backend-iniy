const Room = require("@models/roomModels");

const getStandardRoomsController = async (req, res) => {
  try {
    const results = await Room.getRoomsByClass("STANDART");
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Kesalahan query:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
};
const getMediumRoomsController = async (req, res) => {
  try {
    const results = await Room.getRoomsByClass("MEDIUM");
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Kesalahan query:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
};
const getVIPRoomsController = async (req, res) => {
  try {
    const results = await Room.getRoomsByClass("VIP");
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Kesalahan query:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
};


module.exports = {
  getStandardRoomsController,
  getMediumRoomsController,
  getVIPRoomsController
};
