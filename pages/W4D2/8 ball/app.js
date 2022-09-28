const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/js', express.static(path.join(__dirname, "views/js")));
app.use(express.json());

app.get('/', (req, res, next) => {
    res.render('index');
})

const lists = [
    "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"
];

// app.post('/8Ball', (req, res) => {
//     console.log(req.body);    
//     res.send(JSON.stringify({
//         name : "Nehi",
//         age : 27
//     }));
// });

app.get('/8Ball', (req, res) => {
    const index = Math.floor(Math.random() * lists.length);
    res.send(lists[index]);
});

app.listen(3000);