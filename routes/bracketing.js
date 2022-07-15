const express = require('express')
const router = express.Router()
const bracketCtrl = require('../controllers/backet')


router.get('/', bracketCtrl.bracketing)

module.exports = router