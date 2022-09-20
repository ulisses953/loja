const express = require('express')
const cors = require('cors')
const port = 3000
const controleUsuario = require('./controladores/controle-de-usuarios');

const app = express()
app.use(cors())
app.use(express.json())
controleUsuario(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
