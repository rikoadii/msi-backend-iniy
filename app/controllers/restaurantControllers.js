const Restaurant = require("@models/restaurantModels");

const getMinumanListController = async (req, res) => {
  try {
    const results = await Restaurant.getRestaurantByType("minuman");
    res.status(200).json({ data: results });
  } catch (error) {
    throw error;
  }
};
const getMakananListController = async (req, res) => {
  try {
    const results = await Restaurant.getRestaurantByType("makanan");
    res.status(200).json({ data: results });
  } catch (error) {
    throw error;
  }
};


module.exports = {
    getMakananListController,
    getMinumanListController
};
