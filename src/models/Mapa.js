const mongoose = require('mongoose')


const MapasSchema = new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
})

mongoose.model('Mapas', MapasSchema)