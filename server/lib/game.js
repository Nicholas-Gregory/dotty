const { Game } = require('../models');

const create = async data => await Game.create(data);

const all = async () => await Game.find();

const byId = async id => await Game.findById(id);

// moveString format "blue 1,2"
const parseMoveString = string => ({ 
    color: string.split(' ')[0], 
    x: string
    .split(' ')[1]
    .split(',')[0], 
    y: string
    .split(' ')[1]
    .split(',')[1]
});

const getNeighboors = (state, point) => [
    state.find(p => p.x === point.x + 1 && p.y === point.y + 1),
    state.find(p => p.x === point.x && p.y === point.y + 1),
    state.find(p => p.x === point.x - 1 && p.y === point.y + 1),
    state.find(p => p.x === point.x - 1 && p.y === point.y),
    state.find(p => p.x === point.x - 1 && p.y === point.y - 1),
    state.find(p => p.x === point.x && p.y === point.y - 1),
    state.find(p => p.x === point.x + 1 && p.y === point.y - 1),
    state.find(p => p.x === point.x + 1 && p.y === point.y)
];

const polygonRecurse = (game, point, polygons, currentChain, currentPoint) => {
    currentChain.push(currentPoint);
    const neighboors = getNeighboors(game.state, currentPoint);

    if (neighboors.some(n => n?.x === point.x && n?.y === point.y && n?.color === point.color && currentChain.length > 2)) {
        polygons.push(currentChain);
        return true;
    }

    const nextInChain = neighboors
    .filter(n => n?.color === point.color && !currentChain
        .some(p => p.x === n.x && p.y === n.y));

    if (nextInChain.length === 0) return false;

    // console.log(nextInChain)

    nextInChain.forEach(n => polygonRecurse(game, point, polygons, [...currentChain], n));
}

const findPolygons = game => {
    // Array of arrays containing points making up the polygons
    const polygons = [];

    for (let point of game.state) {
        polygonRecurse(game, point, polygons, [], point);
    }

    return polygons;
}

console.log(findPolygons({
    state: [
        {
            x: 3, y: 3, color: 'blue'
        },{
            x: 4, y: 3, color: 'blue'
        },{
            x: 5, y: 3, color: 'blue'
        },{
            x: 5, y: 4, color: 'blue'
        },{
            x: 5, y: 5, color: 'blue'
        },{
            x: 4, y: 5, color: 'blue'
        },{
            x: 3, y: 5, color: 'blue'
        },{
            x: 3, y: 4, color: 'blue'
        }
    ]
}))

const intersectionIsInPolygon = async (game, point) => {
    // Returns color that encloses intersection if there is an 
    // enclosure, false if not.
    // Find all polygons, then use raycasting to test if point lies within
    // at least one of them.

    // Find polygons
    const polygons = findPolygons(game);
}

const moveIsLegal = (game, move) => !game.enclosed.some(e => e.point.x === move.x && e.point.y === move.y);

const addMove = async (id, moveString) => {
    const game = await byId(id);
    game.moves.push(moveString);
    await game.save();
};

const addPlayer = async (id, playerId) => {
    const game = await byId(id);

    if (game.players.length < 2) {
        game.players.push(playerId);
        await game.save();

        return;
    }

    throw new Error("Games can only have 2 players");
};

const setWinner = async (id, playerId) => {
    const game = await byId(id);

    if (game.players.includes(playerId)) {
        game.winner = playerId;
        await game.save();

        return;
    }

    throw new Error("A player must be playing a game to win it");
};

module.exports = {
    create, all,
    byId,
    addMove, addPlayer, setWinner
};