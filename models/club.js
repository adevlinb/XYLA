const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    clubName: { type: String },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    description: { type: String, default: 'Information Not Available' },
    thumbnail: { type: String, default: "http://i.imgur.com/J5LVHEL.jpg" },
    clubPublicOrPrivate: { type: Boolean, default: false }
}, { timestamps: true });



module.exports = mongoose.model('Club', clubSchema);