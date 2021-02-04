

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    released: Date,
    inStock: Boolean,
    genre: String
});

/* const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        maxLength: 50
    },
    pages: {
        type: Number,
        max: 5000
    },
    inStock: {
        type: Boolean,
        default: true
    },
    genre: {
        type: String,
        enum: ['Fiction', 'Classic', 'History']
    }
}) */

const Book = mongoose.model('Book', bookSchema);
// mongodb://localhost/<name of the database>
// if this database exists, it connects to it, if not, the database will be created

// CRUD = Create Read Update Delete
mongoose.connect('mongodb://localhost/mongoose-intro', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('successfully connected');
    })
    .catch(err => {
        console.log('an error occured', err);
    })

    // https://mongoosejs.com/docs/queries.html
// Book.create({
//     title: 'some title',
//     author: 'some author',
//     pages: 100
// })
//     .then(book => {
//         console.log('this book was created: ', book);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// get the first document that matches the query
// Book.findOne({})

// Book.findById('601c1f8f05aea16a5b07dbc6')
//     .then(book => {
//         console.log('found this book by its id', book);
//     })
//     .catch(err => {
//         console.log(err);
//     })

    // get all the books
// Book.find()
//     .then(books => {
//         console.log('found these books', books);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// get books matched
// Book.find({ title: 'some title' })
//     .then(books => {
//         console.log('found these books', books);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// Book.findOneAndUpdate({title: 'changed title'}, {title: "another title"}, {new: true})
//     // this book is still the old book (updating takes time) if we have only two prams, to get the new book: {new: true} 
//     .then(book => {
//         console.log(book);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// delete the book matching the query// return the deleted book
Book.findOneAndDelete({title: 'another title'})
    .then(book => {
        console.log(book);
        // close the connection to mongodb (should stop connection here)
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    })
    
