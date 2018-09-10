var express = require ('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');


var app = express();
var port = process.env.PORT || 3000;
var bootRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')) )
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')) )
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')) )

app.set('views', './src/views' );
app.set('view engine', 'ejs');

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
bootRouter.route('/')
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

bootRouter.route('/single')
    .get((req, res) => {
        res.send("Hello Single Book");
    });


app.use('/books', bootRouter);

app.get('/', (req, res) => {
    res.render('index', 
        { 
            nav:[
                    {title: 'Book', link : '/books'},
                    {title: 'Author', link : '/author'}
                ], 
            title: 'Library'
        });
});



app.get('/index', function (req, res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, function (){
    debug(`Listen on port ${chalk.red(port)}`);
});   