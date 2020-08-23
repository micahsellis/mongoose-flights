const Flight = require('../models/flight')


module.exports = {
    create
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