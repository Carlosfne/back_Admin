const mongoose = require('mongoose')

const Noticias = mongoose.model('Noticias')

module.exports = {
  async index( req, res ) {
    const noticias = await Noticias.find();

    return res.json(noticias);
  },

  async show(req, res) {
    const noticia = await noticia.findById(req.params.id);

    return res.json(noticia);
  },

  async store( req, res ) {
    const noticia = await Noticias.create(
      req.body
    );
    
    return res.json(noticia);
  },

  async update( req, res ) {
    const noticia = await Noticias.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(noticia);
  },

  async destroy( req, res ) {
    await Noticias.findByIdAndRemove(req.params.id);

    return res.send();
  }
  
}