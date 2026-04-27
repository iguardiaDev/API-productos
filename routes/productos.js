const express = require('express'); //Importamos la libreria express
const router = express.Router(); //Importamos la aplicacion
const controller = require('../controllers/productos'); //Importamos el controller


router.get('/', controller.getProducts);
router.get('/:id', controller.getProductsbyId);
router.post('/', controller.postProductos);
router.put('/:id', controller.putProductos);
router.delete('/:id', controller.delProducto);

module.exports = router;