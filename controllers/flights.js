const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, (err,flights) => res.render('flights/index', { flights }))
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save((err) => {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    })
}

function newFlight(req, res) {
    const defaultFlight = new Flight();
    const dt = defaultFlight.departs;
    const departsDate = dt.toISOString().slice(0,16)
    res.render('flights/new', { departsDate });
}