const express = require('express');
const path = require('path');
const session = require('express-session');

const shoppingCart = require('./routers/shopping-cart');
const product = require('./routers/product');

const app = express();
app.use(session({
    resave : true,
    saveUninitialized : true,
    secret : "super secret key"
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/js', express.static(path.join(__dirname, 'views/js')));
app.use(express.static(path.join(__dirname, "views")));

app.use(express.json());
app.use('/cart', shoppingCart);
app.use('/product', product);

app.listen(3000);