const express = require("express");
const router = express.Router();
const tournamentCtrl = require("../controllers/tournament");
//const passwordValidator = require("../middleware/passwordValidator");

router.get("/tournament/1234", tournamentCtrl.db);
//router.post("/login", userCtrl.login);

module.exports = router;
