//TODO: agregar express
const express = require('express');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar Multer
const multer = require('multer');

//TODO: agregar el mainController
const productController = require('../controllers/productController');

//TODO: agregar el controller login y registro
router.get("/detalle-producto", productController.detalleProducto);
router.get("/carrito-compras", productController.carritoCompras);

//Crear producto
router.get("/create", productController.create); 
//editar producto
router.get("/edit", productController.edit);



//TODO: agregar el modulo
module.exports = router;