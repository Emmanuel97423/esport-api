const express = require("express");
const router = express.Router();
const bracketCtrl = require("../controllers/bracket.controller");

//const passwordValidator = require("../middleware/passwordValidator");

router.post("/bracket/de/123", bracketCtrl.createDoubleElimination);
//router.post("/login", userCtrl.login);
router.get("/bracket", bracketCtrl.storage);

module.exports = router;
