const mongoose = require('mongoose')

const schemae = mongoose.Schema

const readSchema = schemae({
    firstname:{type:String,requred:true},
    lastname:{type:String,requred:true},
    // file:{type:String,requred:true}
    
   


},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model('readSchema',readSchema)