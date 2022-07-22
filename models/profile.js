const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    nickname: { type: String },
    description: { type: String },
    profilePhotoUrl: { type: String },
    profilePublicOrPrivate: { type: Boolean, default: false },
    requests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    blocked: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }],
}, {
    timestamps: true,
});


module.exports = mongoose.model('Profile', profileSchema);