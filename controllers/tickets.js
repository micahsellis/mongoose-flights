const Ticket = require('../models/ticket')
const Flight = require('../models/flight')
const flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}


function create(req, res) {
    req.body.flight = req.params.id
        Ticket.create(req.body)
            .then(() => res.redirect(`/flights/${req.params.id}`))
            .catch(err => console.log(err))
}

function newTicket(req, res) {
    console.log('newticket')
    Flight.findById(req.params.id)
        .then(flight => res.render('tickets/new', { title: 'Add Ticket', flight: flight }))
        .catch(err => console.log(err))
}

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.tix)
        .then((docs) => {
            console.log('Deleted : ', docs)
            res.redirect(`/flights/${req.params.flight}`)
            .catch(err => console.log(err))
        });
}