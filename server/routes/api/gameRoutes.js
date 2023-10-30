const router = require('express').Router();
const game = require('../../lib/game');
const user = require('../../lib/user')

router.post('/', async (req, res) => {
    let newGame;

    try {
        const playerIds = await Promise.all(req.body.players.map(async p =>
            (await user.byUsername(p))._id
        ));

        newGame = await game.create({ ...req.body, players: playerIds });
    } catch (err) {
        return res.status(500).send({
            error: true,
            message: err.message
        });
    }

    res.status(200).send(newGame);
});

module.exports = router;