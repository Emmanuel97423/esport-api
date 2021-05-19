const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.ObjectId;

const participantSchema = mongoose.Schema({
  userId: { type: ObjectId, ref: "User" },
  country: { type: String, ref: "Country" },
  pseudo: { type: String, ref: "User" },
  active: { type: Boolean },
  checkInAt: { type: Date },
  createdAt: { type: Date, required: true },
  finalRank: { type: Number, required: false },
  picture: { type: String, required: false },
  seed: { type: Number, required: false },
  tournamentId: { type: ObjectId, ref: "Tournament" },
  updateAt: { type: Date, required: true },
  email: { type: String, required: true, ref: "User" },
  emailVerified: { type: Boolean, ref: "User" },
  checkIn: { type: Boolean, default: false },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Participant", participantSchema);
