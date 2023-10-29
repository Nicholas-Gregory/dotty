const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    x: Number,
    y: Number,
    color: String
});

const enclosedSchema = new mongoose.Schema({
    point: pointSchema,
    color: String
});

const gameSchema = new mongoose.Schema({
    players: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    moves: [String],
    boardWidth: Number,
    boardHeight: Number,
    state: [pointSchema],
    enclosed: [enclosedSchema],
    winner: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;