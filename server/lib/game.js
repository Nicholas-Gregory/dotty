const { Game } = require('../models');

module.exports = {
    byId: async id => await Game.findById(id)
}