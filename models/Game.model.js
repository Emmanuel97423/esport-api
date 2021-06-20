const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: { type: String, required: true },
  shortName: { type: String, required: true },
  fullName: { type: String, required: true },
  copyrights: { type: String, required: true },
  platformsAvailable: { type: Array, required: true },
  teamSize: { type: Object, required: true },
});

module.exports = mongoose.model("Game", gameSchema);
