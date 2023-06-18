const Room = require("@models/roomModels");

const getStandardRoomsController = async (req, res) => {
  try {
    const results = await Room.getRoomsByClass("STANDART");
    res.status(200).json({ data: results });
  } catch (error) {
    throw error;
  }
};
const getMediumRoomsController = async (req, res) => {
  try {
    const results = await Room.getRoomsByClass("MEDIUM");
    res.status(200).json({ data: results });
  } catch (error) {
    throw error;
  }
};
const getVIPRoomsController = async (req, res) => {
  try {
    const results = await Room.getRoomsByClass("VIP");
    res.status(200).json({ data: results });
  } catch (error) {
    throw error;
  }
};


module.exports = {
  getStandardRoomsController,
  getMediumRoomsController,
  getVIPRoomsController
};
