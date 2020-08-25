const Flight = require('../models/flight')


module.exports = {
    create,
    delete: deleteDest
}

function create(req, res) {
    Flight.findById(req.params.id)
    .then((flight) => {
        flight.destination.push(req.body)
        flight.save()
            .then(() => res.redirect(`/flights/${flight._id}`))
            .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err));
}

function deleteDest (req, res) {
    Flight.findById(req.params.flight)
        .then(flight => {
            let idx = flight.destination.findIndex(dest => dest._id == req.params.dest)
            flight.destination.splice(idx, 1)
            flight.save()
                .then(res.redirect(`/flights/${req.params.flight}`))
                .catch(err => console.log(err))
    })
}