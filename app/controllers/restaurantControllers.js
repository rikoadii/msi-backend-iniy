const Restaurant = require("@models/restaurantModels");

const getMinumanListController = async (req, res) => {
  try {
    const results = await Restaurant.getRestaurantByType("minuman");
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Kesalahan query:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
};
const getMakananListController = async (req, res) => {
  try {
    const results = await Restaurant.getRestaurantByType("makanan");
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Kesalahan query:", error);
    res.status(500).json({ error: "Terjadi kesalahan" });
  }
};


module.exports = {
    getMakananListController,
    getMinumanListController
};
