const express = require('express');
require('dotenv').config();
const db = require('./connection');

const app = express();

db.once('open', () => app.listen(() => console.log("Express server listening!")));