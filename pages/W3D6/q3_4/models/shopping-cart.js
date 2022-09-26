const Product = require('./product');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const products = [];

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
})

class ShoppingCart {
    constructor() {
        this.user = 'user';
    }

    static getTotalPrice () {
        return products.reduce((a, c) => c.price + a, 0);
    }

    static getProducts() {
        return products;
    }
}


products.push(new Product("Nike Dunk", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike SB", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike Zoom", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike Runner", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike Air", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike Air Jordan", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike Air Force", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike Dunk", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike Zoom", 109.99, lorem.generateSentences(6)));
products.push(new Product("Nike SB", 109.99, lorem.generateSentences(6)));

module.exports = ShoppingCart;