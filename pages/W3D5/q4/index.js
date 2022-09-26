const express = require('express');

const app = express();

app.use(express.urlencoded({extended : false}));

app.get('/output', (req, res, next) => {
    let name = req.query.name;
    let age = req.query. age;

    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "not provided";
    }
    res.send(`Welcome ${name}. Your age is ${age}`);
});

app.get('/', (req, res, next) => {
    let time = new Date().getHours();
    let style;
    style = time < 18 && time >= 6 ? "/day.css" : "/night.css";
    let page = '<!Doctype html> \
    <html> \
    <head> \
    <meta charset="UTF-8"> \
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> \
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
    <link href="' + style + '" rel="stylesheet">\
    <title>Form</title> \
    </head> \
    <body> \
    <form action="/result" method="post"> \
    <label for="name">Name</label> \
    <input name="name" type="text"/> \
    <label for="age">Age</label> \
    <input name="age" type="number" /> \
    <input type="submit" value="Submit Query" />\
    </body> \
    </html>';
    res.send(page);

    console.log(time);
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "Not provided";
    }
    res.redirect(`/output?name=${name}&age=${age}`);
});

app.listen(3000);