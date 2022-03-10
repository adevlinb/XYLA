const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    book: { type: Schema.Types.ObjectId, ref: 'Book' },
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
}, { timestamps: true });

postSchema.statics.formatPostInfo = function (req) {
    let newBook = {
        user: req.user._id,
        book: req.body.book,
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating
    }
    return newBook;
}

module.exports = mongoose.model('Post', postSchema);