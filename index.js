const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

const URI = "mongodb+srv://fadarerodha66:Rhoda111@cluster0.k0vzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// URI -Uniform Resource Identifier
// connect to mongodb
mongoose.connect(URI)
.then(()=>{
console.log("Mongodb has started successfully")
})
.catch((err)=>{
    console.log("This is an error", err)
})

const PORT = 5500

let regUser =[]

let studentArray = [
    {firstname: "Heritage", lastname: "SQI", age: 20, isMarried: false},
    {firstname: "Esther", lastname: "SQI", age: 24, isMarried: true},
    {firstname: "Michael", lastname: "SQI", age: 26, isMarried: false},
    {firstname: "Praise", lastname: "SQI", age: 28, isMarried: true},
    {firstname: "Ola", lastname: "SQI", age: 30, isMarried: true},
]

app.get('/', (req, res)=>{
    // res.send("Welcome to node class by Heritage")
    // res.send(studentArray)
    // res.sendFile(__dirname + '/index.html')
    // Templating engine
    // console.log(__dirname)

    res.render("index")
})

app.get('/dashboard', (req, res)=>{
    res.render("dashboard", {name: "Tolu",  gender: 'male'})
})

app.get('/signup', (req, res)=>{
    res.render("signup")
    console.log('this is correct')
})

app.post('/register', (req, res)=>{
    console.log("its working for register")
    console.log(req.body)
    regUser.push(req.body)
    res.send("User registered successfully")

})

// app.listen(PORT, callback)
app.listen(PORT, ()=>{
    console.log("Its working")
})

// npm i -g nodemon