const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const ObjectId = mongoose.Schema.ObjectId;

const userSchema = mongoose.Schema({
  
  pseudo: { type: String, required: true, default: "Vulcain" },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
