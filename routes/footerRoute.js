const { Router } = require('express')
const express = require('express')
const path = require('path')
const footerRoute = express.Router()

footerRoute.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/footer.html'))
})

module.exports = footerRoute