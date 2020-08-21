const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => {
            const oneYear = 365 * 24 * 60 * 60 * 1000;
            () => new Date(Date.now() + oneYear)
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)         