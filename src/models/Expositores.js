const mongoose = require('mongoose')

const ExpositoresSchema = new mongoose.Schema({
  description:{
    type:String,
    required:true
  }
})

mongoose.model('Expositores', ExpositoresSchema)