const mongoose = require('mongoose');
const SBD = new mongoose.Schema({
    squat: {
        load: {
        type: Number,
        },
        conversion: {
            type: String,
        },
        notes: {
            type: String,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
    },
    bench: {
        load: {
        type: Number,
        },
        conversion: {
            type: String,
        },
        notes: {
            type: String,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
    },
    deadlift: {
        load: {
        type: Number,
        },
        conversion: {
            type: String,
        },
        notes: {
            type: String,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
    },
}, {timestamps: true});
 

module.exports = mongoose.model('SBD', SBD);