const express = require('express');
const path = require('path')


const app = express();
const port = 3000;


// set view engine
app.set('view engine', 'ejs');

// set static files
app.use('/public', express.static(path.join(__dirname, 'public')))


const postPrefix = 'A People to Remember';

const entries = {
    author: 'Adrian Bostic',
    posts: [
        {
            title: `${postPrefix} - Sumerians`,
            date: '10/18/23',
            desc: 'blah blah blah',
            path: '/sumerians'
        }
    ]
};


// index
app.get('/', (req, res) => {
    res.render('index', {
        author: entries.author,
        posts: entries.posts
    });
});

// sumerians
app.get('/sumerians', (req, res) => {
    res.render('sumerians', {
        author: entries.author,
        post: entries.posts[0]
    });
});

app.listen(port, () => {
    console.log(`Serving at http://127.0.0.1:${port}`);
});
