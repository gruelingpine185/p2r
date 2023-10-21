const express = require('express');
const path = require('path')


const app = express();
const port = 3000;


// set view engine
app.set('view engine', 'ejs');

// set static files
app.use('/public', express.static(path.join(__dirname, 'public')))


const postPrefix = 'A People to Remember';

const headerToID = (header) => {
    if(!header.length) return;

    let id = header.toLowerCase().replace(/[^A-Za-z0-9]+/g, '-');
    return id;
};


const globals = {
    title: postPrefix,
    author: 'Adrian Bostic',
    headerToID
};

const entries = {
    posts: [
        {
            title: `${postPrefix} - Sumerians`,
            date: '10/21/23',
            desc: 'blah blah blah',
            path: '/sumerians',
            headings: [
                'Language and Writing',
                'Technology',
                'Religion',
                'Economics',
                'Poetry'
            ]
        }
    ]
};


// index
app.get('/', (req, res) => {
    res.render('index', {
        global: globals,
        author: entries.author,
        posts: entries.posts
    });
});

// sumerians
app.get('/sumerians', (req, res) => {
    res.render('sumerians', {
        global: globals,
        author: entries.author,
        post: entries.posts[0]
    });
});

app.listen(port, () => {
    console.log(`Serving at http://127.0.0.1:${port}`);
});
