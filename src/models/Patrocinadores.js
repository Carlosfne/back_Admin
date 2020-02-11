const mongoose = require('mongoose');

const PatrocinadoresSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt:{
    type: Date,
    default: Date.now
  }
})

mongoose.model('Patrocinadores', PatrocinadoresSchema)