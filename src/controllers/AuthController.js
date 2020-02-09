const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = {
  async index( req, res ){
    const expositores = await Expositores.find()

    return res.json(expositores)
  },
  
  async create( req, res ) {
    const user = await User.create(
      req.body
    );

    return res.json(user)
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