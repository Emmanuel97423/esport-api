const mongoose = require("mongoose");

const tournamentSchema = mongoose.Schema({
  name: { type: String, required: true },

  fullName: { type: String, required: true },
  scheduleDateStart: { type: Date, required: true },
  scheduleDateEnd: { type: Date, required: true },
  timezone: { type: String, required: true },
  public: { type: Boolean, required: true },
  size: { type: Number, required: true },
  online: { type: Boolean, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  logo: { type: Object, required: true },
  registrationEnabled: { type: Boolean, required: true },
  registrationOpeningDatetime: { type: Date, required: true },
  registrationClosingDatetime: { type: Date, required: true },
  organization: { type: String, required: true },
  contact: { type: String, required: false },
  discord: { type: String, required: false },
  description: { type: String, required: true },
  rules: { type: String, required: true },
  prize: { type: Object, required: true },
  matchReportEnabled: { type: Boolean, required: true },
  registrationRequestMessage: "Pour plus d'infos, c'est par ici -> []",
  registrationRefusalMessage: "Sorry, votre inscription à été refusé.",
  registrationTermsEnabled: { type: Boolean, required: false },
  registrationTermsUrl: { type: String, required: false },
  discipline: { type: String, required: true },
  participantType: { type: String, required: true },
  platforms: { type: Array, required: true },
  teamSize: { type: Object, required: true },
});

module.exports = mongoose.model("Game", gameSchema);
