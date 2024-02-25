const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.Address, {
      foreignKey: 'user_id',
      as: 'addresses'
    })

    this.belongsToMany(models.Tech, {
      foreignKey: 'user_id',
      through: 'user_techs', // nome da tabela de associacao
      as: 'techs' // tecnologias desse usuario
    })
  }
}

module.exports = User