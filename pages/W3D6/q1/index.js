const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    const date = new Date();
    const style = date.getHours() >= 6 && date.getHours() < 18 ? "day.css" : "night.css";
    res.render("index", {
        time : date.toTimeString(),
        style : style
    });
});



app.listen(3000);