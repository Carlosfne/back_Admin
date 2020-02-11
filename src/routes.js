const express = require('express'),
      routes = express.Router(),
      multer = require('multer'),
      multerConfig = require('./config/multer');

const ProductController = require('./controllers/ProductController');
const NoticiasController = require('./controllers/NoticiasController');
const ExpositoresController = require('./controllers/ExpositoresController');
const PatrocinadoresController = require('./controllers/PatrocinadoresController');
const User = require('./models/User');

routes.post('/register', User.create);


routes.get('/products', ProductController.index );
routes.get('/products/:id', ProductController.show );
routes.post('/products', ProductController.store );
routes.put('/products/:id', ProductController.update );
routes.delete('/products/:id', ProductController.destroy );

routes.get('/noticias', NoticiasController.index);
routes.post('/noticias', NoticiasController.store);
routes.put('/noticias/:id', NoticiasController.update);
routes.delete('/noticias/:id', NoticiasController.destroy);

routes.get('/expositores', ExpositoresController.index);
routes.post('/expositores', ExpositoresController.store);
routes.put('/expositores/:id', ExpositoresController.update);
routes.delete('/expositores/:id', ExpositoresController.destroy);

routes.get('/patrocinadores', PatrocinadoresController.index);
routes.post('/patrocinadores', multer(multerConfig).single('image'), PatrocinadoresController.store);
routes.put('/patrocinadores', PatrocinadoresController.update);
routes.delete('/patrocinadores', PatrocinadoresController.destroy);

module.exports = routes;