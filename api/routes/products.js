const express = require('express')
const router = express.Router()

const Product = require('../models/product')
const mongoose = require('mongoose')

// controllers
const productsCtrl = require('../controllers/products')

// get all products
router.get('/', productsCtrl.get_all_products)

// get single product info
router.get('/:productId', productsCtrl.get_singleProduct)

// create new product
router.post('/', productsCtrl.create_new_product)

// update a product
router.patch('/:productId', productsCtrl.update_product)

// delete a product
router.delete('/:productId', productsCtrl.delete_product)

module.exports = router