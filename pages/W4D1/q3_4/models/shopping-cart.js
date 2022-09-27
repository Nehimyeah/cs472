const Product = require('./product');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

class ShoppingCart {
    constructor() {
        this.user = 'user';
    }

    static getTotalPrice () {
        return products.reduce((a, c) => c.price + a, 0);
    }
}

module.exports = ShoppingCart;