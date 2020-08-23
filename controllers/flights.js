const Flight = require('../models/flight');
const moment = require('moment')

module.exports = {
    index,
    new: newFlight,
    create,
    delete: deleteFlight,
    show
}

function index(req, res) {
    Flight.find()
        .then((flights) => {
            flights.sort((a, b) => a.departs - b.departs);
            res.render('flights/index', { flights, title: "All", moment})
        })
        .catch((err) => console.log(err))
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save()
        .then(index(req,res))
        .catch((err) => console.log(err))
}

function newFlight(req, res) {
    const defaultFlight = new Flight();
    const dt = defaultFlight.departs;
    const departsDate = dt.toISOString().slice(0,16)
    res.render('flights/new', { departsDate, title: "Add New Flight" });
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id)
        .then((err, flight) => {
        if (err) console.log(err);
        res.send('Hello World!')
    })
}

function show(req, res) {
    Flight.findById(req.params.id)
        .then(result => {
            res.render('flights/show', { flight: result, title: 'Flight Detail' })
        })
        .catch((err) => console.log(err))
}