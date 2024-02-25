const Address = require('../database/models/addresses')
const User = require('../database/models/user')

module.exports = {
  async store(req, res) {
    const { user_id } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(user_id)

    if(!user) return res.status(404).json({ message: 'user not found'})

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id
    })

    return res.json(address)
  },

  async index(req, res) {
    const { user_id } = req.params

    const address = await User.findByPk(user_id, {
      include: {
        association: 'addresses'
      }
    })

    if(!address) return res.status(404).json({ message: 'user not found'})

    // const address = await Address.findAll({
    //   where: {
    //     user_id
    //   }
    // })

    return res.json(address)
  }
}