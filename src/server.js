const express = require('express')
const routes = require('./routes')

require('./database/index')

const app = express()
app.use(express.json()) // lidar com requisicoes do formato json

app.use(routes)

app.listen(3333)