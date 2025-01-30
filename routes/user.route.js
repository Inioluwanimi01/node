const express = require('express')
const Router = express.Router()
const {createUser, fetchUser} = require('../controllers/user.controller')

Router.get('/', (req, res)=>{
    // res.send("Welcome to node class by Heritage")
    // res.send(studentArray)
    // res.sendFile(__dirname + '/index.html')
    // Templating engine
    // console.log(__dirname)

    res.render("index")
})

module.exports = Router