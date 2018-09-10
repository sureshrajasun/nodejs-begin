var express = require ('express');
var bookRouter = express.Router();

var books = [
    { 
        title: 'Power reading',
        genre: 'Self Improvement',
        author: 'Macmillan',
        read: 'fale'
    },
    { 
        title: 'Mac notes',
        genre: 'Technology',
        author: 'Kumar',
        read: 'fale'
    },
    { 
        title: 'Art of combat',
        genre: 'Self Defence',
        author: 'Macmillan',
        read: 'fale'
    },
    { 
        title: 'Study plus',
        genre: 'Education',
        author: 'Paul',
        read: 'fale'
    }
];
bookRouter.route('/')
    .get((req, res) => {
        res.render('books',
        { 
            nav:[
                    {title: 'Books', link : '/books'},
                    {title: 'Author', link : '/author'}
                ], 
            title: 'Library',
            books : books
        });
    });

bookRouter.route('/single')
    .get((req, res) => {
        res.send("Hello Single Book");
    });

module.exports = bookRouter;
