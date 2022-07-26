const path = require('path');
const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product');

router.get("/", ProductController.getAllProducts);

module.exports = router;