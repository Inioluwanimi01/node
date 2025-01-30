// dotenv, deployment, api testing, email sending

const express = require('express')
const app = express()
const ejs = require('ejs')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")


const URI = process.dotenv.MONGO_DB_URI
// environment variable

console.log(process.env.MONGO_DB_URI)

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

let allUsers =[]

let studentArray = [
    {firstname: "Heritage", lastname: "SQI", age: 20, isMarried: false},
    {firstname: "Esther", lastname: "SQI", age: 24, isMarried: true},
    {firstname: "Michael", lastname: "SQI", age: 26, isMarried: false},
    {firstname: "Praise", lastname: "SQI", age: 28, isMarried: true},
    {firstname: "Ola", lastname: "SQI", age: 30, isMarried: true},
]




app.get('/all-users', (req, res)=>{
    userModel.find()
    .then((users)=>{
        // console.log(users)
        res.render("allUsers", {allUsers: users})

    })
})


app.post('/register', (req, res)=>{
    // console.log("its working for register")
    let form = new userModel(req.body)
    form.save()
    .then(()=>{
        console.log("User info saved successfully")
    })
    .catch((err)=>{
        console.log(err, "User Info not saved")
    })
    // console.log(req.body)
    // regUser.push(req.body)
    res.redirect('/all-users')
    // res.send("User registered successfully")

})

// app.listen(PORT, callback)
app.listen(PORT, ()=>{
    console.log("Its working")
})

// npm i -g nodemon