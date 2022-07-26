const path = require('path');

const rootDir = require('../util/path');

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

const products= [];
// /admin/add-product => GET
router.get("/add-product", ProductController.getAddProduct); 
// /admin/add-product => POST
router.post("/add-product", ProductController.postAddProduct); 

module.exports = router;