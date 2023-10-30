const express = require('express');
require('dotenv').config();
const db = require('./connection');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', async () => app.listen(process.env.DEV_PORT, () => console.log("Express server listening!")));