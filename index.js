

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
mongoose.connect('mongodb://localhost/mongoose-intro')
    .then(() => {
        console.log('successfully connected');
    })
    .catch(err => {
        console.log('an error occured', err);
    })