const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
        // TODO validation
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    games: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    }],
    wins: Number,
    losses: Number,
    draws: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;