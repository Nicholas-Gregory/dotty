const { User } = require('../models');

const create = async data => await User.create(data);

const all = async () => await User.find();

const byId = async id => await User.findById(id);

const byUsername = async username => await User.findOne({ username });

const byEmail = async email => await User.findOne({ email });

const updateById = async data => await User.findByIdAndUpdate(id, data);

const updateByUsername = async username => await User.findOneAndUpdate({ username }, data);

const updateByEmail = async email => await User.findOneAndUpdate({ email }, data);

const gamesById = async id => (await (await byId(id)).populate('games')).games;

const gamesByUsername = async username => (await (await byUsername(username)).populate('games')).games;

const gamesByEmail = async email => (await (await byEmail(email)).populate('games')).games;

const deleteById = async id => await User.findByIdAndDelete(id);

const deleteByUsername = async username => await User.findOneAndDelete({ username });

const deleteByEmail = async email => await User.findOneAndDelete({ email });

module.exports = {
    all, create,
    byId, byUsername, byEmail,
    gamesById, gamesByUsername, gamesByEmail,
    updateById, updateByUsername, updateByEmail,
    deleteById, deleteByUsername, deleteByEmail
}