const mongoose = require('mongoose')

const Mapas = mongoose.model('Mapas')

module.exports ={
  async index( req, res ){
    const mapas = await Mapas.find()

    return res.json(mapas)
  },
  
  async create( req, res ) {
    const mapa = await Mapas.create(
      req.body
    );

    return res.json(mapa)
  },

  async update( req, res ) {
    const mapa = await Mapas.findByIdAndUpdate( req.params.id, req.body, { new : true});

    return res.json(mapa)
  },

  async delete( req, res ) {
    const mapa = await Mapas.findByIdAndRemove( req.params.id );

    return res.json()
  }
}