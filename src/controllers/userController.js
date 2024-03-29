const User = require('../database/models/user')

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = await User.create({
      name,
      email,
      password
    })

    return res.json(user)
  },

  async index(req, res) {
    const users = await User.findAll()

    return res.json(users)
  }
}