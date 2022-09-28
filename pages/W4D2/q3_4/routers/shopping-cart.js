const express = require('express');
const { addToCart, getCart } = require('../controllers/shopping-cart');

const router = express.Router();

router.get('/', getCart);

// router.use(express.urlencoded({ extended : false}));
router.post('/addToCart', addToCart);

module.exports = router;