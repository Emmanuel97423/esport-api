const express = require("express");
const router = express.Router();
const bracketCtrl = require("../controllers/bracket");

//const passwordValidator = require("../middleware/passwordValidator");

router.post("/bracket/de/123", bracketCtrl.doubleElimination);
//router.post("/login", userCtrl.login);
router.get("/bracket", bracketCtrl.storage);

module.exports = router;
