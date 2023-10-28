const { Game } = require('../models');

const create = async data => await Game.create(data);

const all = async () => await Game.find();

const byId = async id => await Game.findById(id);

const addMove = async (id, moveString) => {
    const game = await byId(id);
    game.moves.push(moveString);
    await game.save();
}

const addPlayer = async (id, playerId) => {
    const game = await byId(id);

    if (game.players.length < 2) {
        game.players.push(playerId);
        await game.save();

        return;
    }

    throw new Error("Games can only have 2 players");
}

const setWinner = async (id, playerId) => {
    const game = await byId(id);

    if (game.players.includes(playerId)) {
        game.winner = playerId;
        await game.save();

        return;
    }

    throw new Error("A player must be playing a game to win it");
}

module.exports = {
    create, all,
    byId,
    addMove, addPlayer
}