const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  restaurant_name: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  pizza: { type: String, required: "Pizza Name is required" },
  description: { type: String },
  style: { type: String },
  score: { type: Number, min: 0, max: 5 },
});

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;
