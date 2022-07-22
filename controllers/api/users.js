const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const meBook = require('../../models/meBook');
const Bookshelf = require('../../models/bookshelf');
const Profile = require('../../models/profile');

module.exports = {
  create,
  login,
  checkToken,
  updateUser
};

async function create(req, res) {
  try {
    console.log("create", req.body)

    const user = await User.create(req.body);
    const newMeBook = await meBook.create({ userId: user._id });
    const bookshelf = await Bookshelf.create({userId: user._id, meBook: newMeBook._id});
    const profile = await Profile.create({ userId: user._id, name: user.name });

    console.log(user, profile, "signup");
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
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function updateUser(req, res){
  try{
    console.log("update here")
    let updatedUser = await User.findById(req.user._id).populate("requests.user").populate("friends.user").populate("blocked.user").populate("clubs.club").exec();
    return res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }

}