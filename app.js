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
            ],
            citations: [
                'Harrsch, Mary. Dagger Iran Luristan 2600-2350 BCE Bronze. Photograph, https://upload.wikimedia.org/wikipedia/commons/9/9d/Dagger_Iran_Luristan_2600-2350_BCE_Bronze.jpg.',
                'Mbzt. Limestone, Uruk III era, late 4th millennium BC. J.-C, https://commons.wikimedia.org/wiki/File:P1150884_Louvre_Uruk_III_tablette_%C3%A9criture_pr%C3%A9cun%C3%A9iforme_AO19936_rwk.jpg.',
                'Osama Shukir Muhammed, Amin. Photograph, 29 Jan. 2014, https://commons.wikimedia.org/wiki/File:Four_statuettes_of_Mesopotamian_gods.jpg.',
                '\"Poetry.\" The Ancient Near East: An Encyclopedia for Students, edited by Ronald Wallenfels and Jack M. Sasson, vol. 4, Charles Scribner\'s Sons, 2000, pp. 4-5. Gale In Context: World History, link.gale.com/apps/doc/CX2897300315/WHIC?u=viva2_nvcc&sid=bookmark-WHIC&xid=4ed45fc2. Accessed 3 Sept. 2023.',
                'Langdon, Stephen. Tablet of the Gilgamish Epic (Obverse). Photograph, 1 Jan. 1917, https://commons.wikimedia.org/wiki/File:Tablet_of_the_Gilgamish_Epic_(Obverse).jpg.',
                'Walthall, Jasmine. Photograph, 13 Mar. 2009, https://commons.wikimedia.org/wiki/File:Ruins_from_a_temple_in_Naffur.jpg.'                
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
