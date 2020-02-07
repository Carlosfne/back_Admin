const mongoose = require('mongoose')

const NoticiasSchema = new mongoose.Schema({
  description:{
    type: String,
    required: true
  }
})

mongoose.model('Noticias', NoticiasSchema)