const mongoose = require("mongoose");
const db = require("../model");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pizza_club_db"
);

const restaurantSeed = [
  {
    name: "Dulonos",
    location: {
      city: "Minneapolis",
      state: "MN",
      zip: 55401,
    },
  },
  {
    name: "Black Sheep",
    location: {
      city: "Minneapolis",
      state: "MN",
      zip: 55401,
    },
  },
  {
    name: "Pig Ate My Pizza",
    location: {
      city: "Robinsdale",
      state: "MN",
    },
  },
];

const pizzaSeed = [
  {
    name: "Pepperoni",
    restaurant: "Black Sheep",
    description: "Best ronis eva! Giant chared and greased to perfection",
    score: 5,
  },
  {
    name: "Almanac of the Dead",
    restaurant: "Geek Love Cafe",
    description:
      "Homemade sourdough crust is amazing. Great combo of roasted beets and cheese.",
    score: 5,
  },
  {
    name: "Pepperoni",
    restaurant: "Jakeenos",
    description: "Very solid classic 'square' style pizza.",
    score: 4,
  },
];

const clubSeed = [
  {
    name: "Rockin Ronis",
  },
  {
    name: "Never Too Much Sauce",
  },
  {
    name: "MPLS Pizza Club",
  },
  {
    name: "NYC Pizza Club",
  },
];

db.Restaurant.remove({})
  .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
  .then((data) => {
    console.log(data.result.n + " test restaurants inserted!");
    db.Pizza.remove({})
      .then(() => db.Pizza.collection.insertMany(pizzaSeed))
      .then((data) => {
        console.log(data.result.n + " test pizzas inserted!");
        db.Club.remove({})
          .then(() => db.Club.collection.insertMany(clubSeed))
          .then((data) => {
            console.log(data.result.n + " test clubs inserted!");
            process.exit(0);
          });
      });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
