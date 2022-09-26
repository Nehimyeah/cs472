const Product = require('../models/product');

exports.getProduct = (req, res) => {
    const id = req.params.id;
    // console.log(id);rs
    const product = Product.getProduct(+id);
    res.render('product', { title : "Product", product : product});
};