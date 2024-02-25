const Tech = require('../database/models/tech')
const User = require('../database/models/user')

module.exports = {
  async store(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if(!user) return res.status(404).json({ message: 'user not found'})

    // findOrCreate => se nao existir ele cria
    const [tech, created] = await Tech.findOrCreate({
      where: { name }
    })

    await user.addTech(tech)

    return res.json(tech)
  },

  async delete(req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if(!user) return res.status(404).json({ message: 'user not found'})

    // findOrCreate => se nao existir ele cria
    const tech = await Tech.findOne({
      where: { name }
    })

    await user.removeTech(tech)

    return res.json({ message: 'removed'})
  },

  async index(req, res) {
    const { user_id } = req.params

    const tech = await User.findByPk(user_id, {
      include: {
        association: 'techs'
      }
    })

    if(!tech) return res.status(404).json({ message: 'user not found'})

    // const address = await Address.findAll({
    //   where: {
    //     user_id
    //   }
    // })

    return res.json(tech)
  }
}