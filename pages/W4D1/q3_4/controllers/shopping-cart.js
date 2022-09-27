const ShoppingCart = require("../models/shopping-cart");
const Product = require('../models/product');

exports.getCart = (req, res, next) => {
  res.render('shopping-cart', {
      title : "Shopping Cart", 
      cart : req.session.cart
  });
}

exports.addToCart = (req, res, next) => {
  const id = +req.body.id;
  if (!req.session.cart)
    req.session.cart = {};
  let num = id in req.session.cart ? req.session.cart[id].quantity : 0;
  num++;
  req.session.cart[id] = {
    quantity : num,
    product : Product.getProduct(id)
  }
  res.redirect('/cart');
}