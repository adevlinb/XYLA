const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    Title: {type: String},
    Authors: [],
    Subjects: [],
    Publishers: { type: String, default: 'Information Not Available'},
    pageCount: { type: Number, default: 0},
    isbnNum: {type: Number, default: 0},
    rating: {type: Number, default: 0},
    description: { type: String, default: 'Information Not Available'},
    thumbnail: { type: String, default: "http://i.imgur.com/J5LVHEL.jpg"}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema);