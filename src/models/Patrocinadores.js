const mongoose = require('mongoose');

const PatrocinadoresSchema = new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  }
})

mongoose.model('Patrocinadores', PatrocinadoresSchema)