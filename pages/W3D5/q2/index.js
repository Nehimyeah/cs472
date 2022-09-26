const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    const form = '<form action="/result" method="post">'+
        '<label for="name">Name</label>' +
        '<input name="name" type="text"/>' +
        '<label for="age">Age</label>' +
        '<input name="age" type="number" />' +
        '<input type="submit" value="Submit Query" />';
    res.send(form);
})

app.use(express.urlencoded({extended : false}));


app.post('/result', (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    if (!name) {
        name = 'person';
    }
    if (!age) {
        age = "age not given";
    }
    res.send(`Welcome ${name}. Your age is ${age}`);
})

app.listen(3000);