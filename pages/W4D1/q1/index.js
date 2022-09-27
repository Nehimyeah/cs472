const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.listen(3000);

app.use(cookieParser());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
    const form = "<form method='post'>\
    <label>Cookie Key\
    <input type='text' name='key'>\
    </label> <br>\
    <label>Cookie Value\
    <input type='text' name='val'>\
    </label> <br>\
    <input type='submit' value='Submit'>\
    </form>";
    const cookies = Object.keys(req.cookies);
    let table = '<table border="1|0">\
    <tr>\
    <th>Key</th>\
    <th>Value</th>\
    </tr>';
    cookies.forEach(e => table += `<tr><td>${e}</td><td>${req.cookies[e]}</td></tr>`);
    
    res.send(form + table);
});

app.post('/', (req, res) => {
    const key = req.body.key;
    const val = req.body.val;
    res.cookie(key, val);
    res.redirect('back');
});