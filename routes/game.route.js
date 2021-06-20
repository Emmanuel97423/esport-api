const express = require("express");
const router = express.Router();
const gameCtrl = require("../controllers/game.controller");

router.post("/game", gameCtrl.addGame);

module.exports = router;
