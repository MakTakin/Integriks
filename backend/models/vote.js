const Sequelize = require('sequelize')
const db = require('../database/database')

const Vote = db.define('vote', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user: {
        type: Sequelize.TEXT,
    },
    answer: {
        type: Sequelize.TEXT,
    },
    text: {
        type: Sequelize.TEXT,
    }
})

module.exports = Vote