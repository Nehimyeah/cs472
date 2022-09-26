const express = require('express');
const path = require('path');
const { parentPort } = require('worker_threads');

const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render("index.ejs");
});

app.post('/result', (req, res, next) => {
    let name = req.body.name;
    let age = req.body.age;

    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "not provided";
    }
    res.redirect(303, `/output?name=${name}&age=${age}`);
});

app.post('/addToCart', (req, res, next) => {
    console.log(req.body.product);
    res.send('Thanks for buying');
})

app.get('/output', (req, res, next) => {
    let name = req.query.name;
    let age = req.query.age;
    res.render('output.ejs', {name : name, age : age});
})

app.listen(3000);