const express = require('express');
const path = require('path')


const app = express();
const port = 3000;


// set view engine
app.set('view engine', 'ejs');

// index
app.use('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Serving at http://127.0.0.1:${port}`);
});
