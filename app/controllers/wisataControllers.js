const Wisata = require("@models/wisataModels");

const getWisataController = async (req, res) => {
  try {
    const results = await Wisata.getWisataModels();
    res.status(200).json({ data: results });
  } catch (error) {
    throw error;
  }
};

module.exports = {getWisataController};
