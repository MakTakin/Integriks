const {Sequelize} = require('sequelize')
const db = new Sequelize('integriks', 'postgres', 'ahjyn123', {
  dialect: 'postgres'
})

module.exports = db