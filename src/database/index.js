const sequelize = require('sequelize')
const config = require('../config/index')

const User = require('./models/user')
const Address = require('./models/addresses')
const Tech = require('./models/tech')

const connection = new sequelize(config)

User.init(connection)
Address.init(connection)
Tech.init(connection)

Address.associate(connection.models)
User.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection