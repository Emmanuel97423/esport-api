const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;

const bracketSchema = mongoose.Schema({
  bracketId: { type: ObjectId, required: true },
  tournamentId: { type: ObjectId, ref: "tournament" },
  participant: { type: Array },
  stage: { type: Array },
  group: { type: Array },
  round: { type: Array },
  match: { type: Array },
  match_game: { type: Array },
});

module.exports = mongoose.model("Bracket", bracketSchema);
