const express = require('express');
const path = require('path')


const app = express();
const port = 3000;


// set view engine
app.set('view engine', 'ejs');

// set static files
app.use('/public', express.static(path.join(__dirname, 'public')))


const entries = [
    {
        title: 'A People to Remember - Sumerians',
        date: '10/18/23',
        desc: 'blah blah blah',
        path: '/sumerians'
    }
];

// index
app.use('/', (req, res) => {
    res.render('index', {
        entries: entries
    });
});

app.listen(port, () => {
    console.log(`Serving at http://127.0.0.1:${port}`);
});
