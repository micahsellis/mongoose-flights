const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights.js');
const flights = require('../controllers/flights.js');


router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);


module.exports = router;
