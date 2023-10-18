const express = require('express')
const SellerRouter = express.Router();
const sellerController = require('../controllers/seller.js')

SellerRouter.post('/login' , sellerController.login)
SellerRouter.post('/SignUp' , sellerController.register)
















module.exports = SellerRouter