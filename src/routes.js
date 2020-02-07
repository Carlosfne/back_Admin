const express = require('express'),
      routes = express.Router();

const ProductController = require('./controllers/ProductController');
const NoticiasController = require('./controllers/NoticiasController');
const ExpositoresController = require('./controllers/ExpositoresController');

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
routes.delete('/expositores/:id', ExpositoresController.delete);

module.exports = routes;