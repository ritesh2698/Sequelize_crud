const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json());

//database config
const db =require('./app/config/db.config')

db.sequelize.sync({force:true}).then(()=>{
    console.log("drop and resync with {force:true}")
})

//application routes
require('./app/route/book.route')(app)

//listen server
app.listen(3000,()=>{
    console.log("Application listen on port 3000")
})