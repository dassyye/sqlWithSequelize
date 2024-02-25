const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: connection,
      tableName: 'techs'
    })
  }
  // address pertence a um usuario
  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'tech_id',
      through: 'user_techs', // nome da tabela de associacao
      as: 'users' // usuarios que tem essa tecnologia
    })
  }
}

module.exports = Tech