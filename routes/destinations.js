const express = require('express')
const router = express.Router()
const desinationCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', desinationCtrl.create)

module.exports = router;