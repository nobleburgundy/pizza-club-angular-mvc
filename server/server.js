const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const pizzaController = require("./controller/pizzaController");
const restaurantController = require("./controller/restaurantController");
const clubController = require("./controller/clubController");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// PIZZA collection routes
app.get("/api/pizzas", pizzaController.findAll);
app.get("/api/pizzas/:id", (req, res) => {
  return pizzaController.findById(req.params.id);
});

// RESTAURANT collection routes
app.get("/api/restaurants", restaurantController.findAll);

// Club collection routes
app.get("/api/clubs", clubController.findAll);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pizza_club_db"
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on ${PORT}!`);
});
