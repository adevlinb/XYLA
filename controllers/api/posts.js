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
    console.log(req.body.book)
    const postBook = Book.findById(req.body.book).exec();
    const newPost = await Post.formatPostInfo(req);
    console.log(newPost)
    const post = await new Post(newPost)
    await post.save();
    const allUserPosts = await Post.find({ user: req.user._id }).populate('book').exec()
    console.log(allUserPosts)
    res.json(allUserPosts)

}

async function getAllPosts(req, res) {
    console.log('all posts')
    const allPosts = await Post.find({}).populate('user').populate('book').exec()
    console.log(allPosts)
    res.json(allPosts);
}

async function getUserPosts(req, res) {
    console.log('user Posts')
    const allUserPosts = await Post.find({ user: req.user._id }).populate('book').populate('user').exec()
    console.log(allUserPosts)
    res.json(allUserPosts)
}