const mongoose = require('mongoose')

const ExpositoresSchema = new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
})

mongoose.model('Expositores', ExpositoresSchema)