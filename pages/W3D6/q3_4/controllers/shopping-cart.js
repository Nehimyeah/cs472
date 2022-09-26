const ShoppingCart = require("../models/shopping-cart");

const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
});

exports.getProducts = (req, res, next) => {
    res.render('shopping-cart', { title : "Shopping Cart", products : ShoppingCart.getProducts(), ShoppingCart : ShoppingCart });
}