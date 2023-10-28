const express = require('express');
require('dotenv').config();
const db = require('./connection');

const models = require('./models');
const user = require('./lib/user');

const app = express();

db.once('open', async () => {
    // const game = await models.Game.create({});

    // await models.User.create({
    //     email: 'test',
    //     username: 'test',
    //     games: [game._id]
    // })

    console.log(await user.gamesById("653d763626f926e7e7a1174d"))

    app.listen(() => console.log("Express server listening!"))
});