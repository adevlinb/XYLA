const mongoose = require('mongoose');
const user = require('./user');
const postSchema = require('./post')
const Schema = mongoose.Schema;

const meBookCommentSchema = new Schema({
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const meBookSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    // photos: [photoSchema],
    description: {type: String},
    title: {type: String},
    comment: [meBookCommentSchema]
}, { timestamps: true });


module.exports = mongoose.model('meBook', meBookSchema);