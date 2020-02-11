const mongoose = require('mongoose')

const Patrocinadores = mongoose.model('Patrocinadores')

module.exports = {
  async index( req, res ) {
    const patrocinadores = await Patrocinadores.find();

    return res.json(patrocinadores);
  },

  async show(req, res) {
    const patrocinadores = await Patrocinadores.findById(req.params.id);

    return res.json(patrocinadores);
  },

  async store( req, res ) {
    const patrocinadores = await Patrocinadores.create({
      name: req.file.originalname,
      size: req.file.size,
      key: req.file.key,
      url: req.file.path,
    });
    console.log(req.file)
    return res.json(patrocinadores);
  },

  async update( req, res ) {
    const patrocinadores = await Patrocinadores.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(patrocinadores);
  },

  async destroy( req, res ) {
    await Patrocinadores.findByIdAndRemove(req.params.id);

    return res.send();
  }
  
}