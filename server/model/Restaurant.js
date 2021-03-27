const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurant_name: {
    type: String,
    required: "Restaurant name is required",
  },
  location: {
    city: String,
    state: String,
    zip: Number,
  },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
