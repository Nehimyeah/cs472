const express = require('express');
const { getProduct, getProducts } = require('../controllers/product');

const router = express.Router();

router.get('/:id', getProduct);
router.get('/', getProducts);

module.exports = router;