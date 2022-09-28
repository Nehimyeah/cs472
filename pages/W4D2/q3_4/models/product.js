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

class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.id = Product.id++;
    }

    static id = 0;

    static getProducts() {
        return products;
    }

    static getProduct(id) {
        let product;
        for (let p of products) {
            if (p.id === +id) {
                product = p;
                break;
            }
        }
        // console.log(product);
        return product;
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


module.exports = Product;
