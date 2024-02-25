const express = require('express')

const userController = require('./controllers/userController')
const addressController = require('./controllers/addressController')
const techsController = require('./controllers/techsController')

const app = express.Router()

app.get('/users', userController.index)
app.post('/users', userController.store)

app.get('/users/:user_id/addresses', addressController.index)
// GET users
app.post('/users/:user_id/addresses', addressController.store)
// POST in localhost:3333/users/3/addresses create address for user 3

app.get('/users/:user_id/techs', techsController.index)
app.post('/users/:user_id/techs', techsController.store)
app.delete('/users/:user_id/techs', techsController.delete)

module.exports = app