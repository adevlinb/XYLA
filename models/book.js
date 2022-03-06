const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    Title: {type: String},
    Authors: [],
    subjects: [],
    Publishers: {type: String},
    pageCount: {type: Number},
    isbnNum: {type: Number},
    rating: {type: Number},
    description: {type: String},
    imageLinks: {
        smallThumbnail: {type: String}, 
        thumbnail: {type: String}
    }



}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema);