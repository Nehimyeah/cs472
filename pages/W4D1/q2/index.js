const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.urlencoded({extended : false}));
app.use(session({
    resave : true,
    secret : "super secret key",
    saveUninitialized : true
}));

app.get('/output', (req, res, next) => {
    let name = req.session.user.name;
    let age = req.session.user.age;
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
    req.session.user = {
        name : name,
        age : age
    }
    res.redirect(`/output`);
});

app.listen(3000);