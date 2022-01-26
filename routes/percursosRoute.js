const express = require('express')
const percursosRoute = express.Router()
const connection = require ('../dbconnection')


percursosRoute.get('/', (req, res)=>{
    connection.query('SELECT * FROM nivel', (err, result) =>{
        if(err){
            console.log('Erro na base de dados...')
        }
        else{
            res.json(result)
        }
    })
})
percursosRoute.get('/ilhas', (req, res)=>{
    connection.query('SELECT * FROM ilhas', (err, result) =>{
        if(err){
            console.log('Erro na base de dados...')
        }
        else{
            res.json(result)
        }
    })
})

module.exports = percursosRoute