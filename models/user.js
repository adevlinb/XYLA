const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const friendRequestSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const friendsListSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const blockedSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const clubsJoinedSchema = new Schema({
  clubId: { type: Schema.Types.ObjectId, ref: 'Club' },
}, { timestamps: true });

const userSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },
  profilePhotoUrl: {type: String},
  requests: [friendRequestSchema],
  friends: [friendsListSchema],
  blocked: [blockedSchema],
  clubs: [clubsJoinedSchema],
  profilePublicOrPrivate: {type: Boolean, default: false},
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the use document
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);