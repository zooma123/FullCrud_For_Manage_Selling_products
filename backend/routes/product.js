const express =require('express')
const productrouter = express.Router();
const ProductController = require('../controllers/product.js')
const verify = require('../utils/verifytoken.js')
productrouter.get('/GetProducts' , ProductController.GetallProduct)
productrouter.post('/addProduct' , verify.verifyToken,ProductController.sellProduct)
productrouter.delete('/deleteProduct/:id' ,ProductController.DeleteProduct )
productrouter.get('/GetProductsOfSeller' ,verify.verifyToken ,  ProductController.getmyProduct)
















module.exports = productrouter