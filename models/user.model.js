const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    firstname: {type:String, required:true},
    lastname: {type:String, required:true},
    email: {type:String, required:true},
    age: {type:Number, required:true},
   date_registered: {type:String, default:Date.now()},
    password: {type:String, required:true}
})
let userModel= mongoose.model('Herifad', userSchema)

module.exports = userModel;