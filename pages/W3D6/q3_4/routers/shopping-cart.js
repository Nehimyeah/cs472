const express = require('express');
const { getProducts } = require('../controllers/shopping-cart');

const router = express.Router();

router.get('/', getProducts);

module.exports = router;