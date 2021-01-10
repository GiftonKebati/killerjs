const mongoose = require('mongoose')

const alienschema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },

    email:{
        type:String,
        required:false
    },

    phone:{
          type:String,
          required:true
    }



})

module.exports = mongoose.model('Alien', alienschema)