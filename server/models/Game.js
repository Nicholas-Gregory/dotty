const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    players: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    moves: [String],
    winner: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;