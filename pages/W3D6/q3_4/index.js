const express = require('express');
const path = require('path');

const shoppingCart = require('./routers/shopping-cart');
const product = require('./routers/product');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "views")));

app.use('/shopping-cart', shoppingCart);
app.use('/product', product);

app.listen(3000);