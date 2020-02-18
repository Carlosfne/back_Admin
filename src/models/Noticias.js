const mongoose = require('mongoose')

const NoticiasSchema = new mongoose.Schema({
  image:{
    type:String,
    required:true
  },
  description:{
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
})

mongoose.model('Noticias', NoticiasSchema)