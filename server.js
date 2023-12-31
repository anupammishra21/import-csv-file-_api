const express = require('express')
const app = express()
const path = require('path')
_=require('underscore')

const body_parser = require('body-parser')

require ('dotenv').config()

app.use (body_parser.urlencoded({
    extended:true
}))

const apiRouter = require('./routes/reader.routes')
app.use("/",apiRouter)
require(path.join(__dirname,"./config/reader.config"))()

app.listen(process.env.PORT,()=>{
    console.log(`server is running at @http://127.0.0.1:${process.env.PORT}`);
})