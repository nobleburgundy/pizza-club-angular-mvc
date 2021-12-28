const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  name: { type: String },
});

const Club = mongoose.model("Club", ClubSchema);

module.exports = Club;
