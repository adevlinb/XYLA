const User = require('../../models/user');
const Bookshelf = require('../../models/bookshelf');
const Book = require('../../models/book');
const Post = require('../../models/post')


module.exports = {
    create,
    getAllPosts,
    getUserPosts
};

async function create(req, res) {
    const postBook = Book.findById(req.body.book).exec();
    const newPost = await Post.formatPostInfo(req);
    const post = await new Post(newPost)
    await post.save();
    const allUserPosts = await Post.find({ user: req.user._id }).populate('book').exec()
    res.json(allUserPosts)

}

async function getAllPosts(req, res) {
    const allPosts = await Post.find({}).populate('user').populate('book').exec()
    res.json(allPosts);
}

async function getUserPosts(req, res) {
    const allUserPosts = await Post.find({ user: req.user._id }).populate('book').populate('user').exec()
    res.json(allUserPosts)
}