const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs');

const User = mongoose.model('User')

module.exports = {
  async create( req, res ) {

    const { email } = req.body;

    if( await User.findOne({ email }))
      return res.json('Usuário já existente em nosso banco de dados')
    const user = await User.create(
      req.body
    );
    user.password = undefined;
    return res.json(user)
  },

  async auth ( req, res ) {
    const { email , password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user)
      return res.json('Usuário não encontrado')

    if(!await bcrypt.compare( password, user.password))
      return res.json('Senha incorreta')

    user.password = undefined;

    res.json(user)
  },
  // async index( req, res ){
  //   const expositores = await Expositores.find()

  //   return res.json(expositores)
  // },
  

  async update( req, res ) {
    const expositor = await Expositores.findByIdAndUpdate( req.params.id, req.body, { new : true});

    return res.json(expositor)
  },

  async delete( req, res ) {
    const expositor = await Expositores.findByIdAndRemove( req.params.id );

    return res.json()
  }
}