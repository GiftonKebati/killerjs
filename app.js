const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const url = 'mongodb://localhost:27017/gift'
const taskroutes = require('./routes/tasks')


const app = express()
const port = 3000
app.use(express.json()) 

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected')
})


app.use('/api',taskroutes)


app.listen(port, ()=>console.log('app is lstening on port'+port))