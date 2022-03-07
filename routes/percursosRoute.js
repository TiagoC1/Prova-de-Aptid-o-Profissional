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
percursosRoute.get('/area', (req, res)=>{
    connection.query('SELECT * FROM área', (err, result) =>{
        if(err){
            console.log('Erro na base de dados...')
        }
        else{
            res.json(result)
        }
    })
})
// Rota para obter um post
percursosRoute.get('/url/:id', (req, res)=>{
    connection.query('SELECT urlcatalogo FROM cursos WHERE idcursos = ?', 
    [req.params.id],
    (err, result) =>{
        if(err){
            console.log('Erro na base de dados...')
        }
        else{
            res.json(result[0])
        }
    })
})
// Rota para criação do post
percursosRoute.post('/percursos', (req, res)=>{
    try{
        connection.query('CALL getCursos(?,?,?)',
        [req.body.nivel,req.body.area,req.body.ilha],
        (error,result) => {
            if(error) throw error
            res.json(result[0])
        })
    }
    catch(error)
    {
        res.json({msg:'Ocorreu um erro na base de dados'})
    }    
    
})

module.exports = percursosRoute