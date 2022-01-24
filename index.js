const express = require('express')
const app = express()
const path = require('path')
//const connection = require('./dbconnection')

//define caminho para a pasta pública do projeto
app.use(express.static('./public'))

// Definir Rotas
app.use('/percursos', require('./routes/percursosRoute'))

app.get('/', function (req, res) {
  res.sendFile(path.join(_dirname, '/public/index.html'))
})

app.get('/:nome', function (req, res) {
    res.send(`Olá ${req.params.nome}`)
})
   
  const port = 3000;

app.listen(port, function (){
  console.log("Listenning on port:" + port )
})   