const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const meBook = require('../../models/meBook');
const Bookshelf = require('../../models/bookshelf');

module.exports = {
  create,
  login,
  checkToken,
  updateUser
};

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    //create their bookshelf
    const bookshelf = await new Bookshelf ({userId: user._id})
    const newMeBook = await new meBook({ userId: user._id })
    newMeBook.save();
    bookshelf.meBook = newMeBook._id
    bookshelf.save();
    console.log(newMeBook, bookshelf)
    // token will be a string
    const token = createJWT(user);
    // Yes, we can serialize a string
    res.json(token);
  } catch (err) {
    // Probably a dup email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // Find the user by their email address
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    // Check if the password matches
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

function checkToken(req, res) {
    //req.user will always be there for you
    // console.log('req.user', req.user)
    // console.log('req.exp', req.exp)
    res.json(req.exp)
}


/* Helper Functions */

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function updateUser(req, res){
  try{
    let updatedUser = await User.findById(req.user._id).populate("requests").populate("friends");;
    console.log(updatedUser)
    return res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }

}