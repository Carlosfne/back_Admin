const mongoose = require('mongoose')

const Expositores = mongoose.model('Expositores')

module.exports = {
  async index( req, res ){
    const expositores = await Expositores.find()

    return res.json(expositores)
  },

  async store( req, res ) {
    const expositor = await Expositores.create(
      req.body
    );

    return res.json(expositor)
  },

  async update( req, res ) {
    const expositor = await Expositores.findByIdAndUpdate( req.params.id, req.body, { new : true});

    return res.json(expositor)
  },

  async delete( req, res ) {
    const expositor = await Expositores.findByIdAndRemove( req.params.id );

    return res.json()
  }
}