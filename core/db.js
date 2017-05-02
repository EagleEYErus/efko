const sequelize = require('./Sequelize');
const type = require('sequelize').DataTypes;
const db = {};

db.users = require('../models/user')(sequelize, type);
db.resolves = require('../models/resolves')(sequelize, type);

module.exports = db;
