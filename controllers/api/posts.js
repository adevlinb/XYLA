const User = require('../../models/user');
const Bookshelf = require('../../models/bookshelf');
const Book = require('../../models/book');
const Post = require('../../models/post')


module.exports = {
    create,
    getAllPosts,
    getUserPosts,
    addComment
};

async function create(req, res) {
    try {
        const postBook = await Book.findById(req.body.book.value).exec();
        console.log(postBook, req.body.book.value)
        if (!postBook) throw new Error ();
        const newPost = await Post.formatPostInfo(req);
        const post = await new Post(newPost)
        await post.save();
        const allUserPosts = await Post.find({ user: req.user._id }).populate('book').exec()
        if (!allUserPosts) throw new Error ();
        res.json(allUserPosts)
    } catch (err) {
        console.log(err)
    }

}

async function getAllPosts(req, res) {
    try{
        const allPosts = await Post.find({}).populate('user').populate('book').populate('comment').populate('comment.user').sort({createdAt: 'desc'}).exec()
        res.json(allPosts);
    } catch (err) {
        console.log(err)
    }
}

async function getUserPosts(req, res) {
    try{
        const allUserPosts = await Post.find({ user: req.user._id }).populate('book').populate('user').populate('comment').populate('comment.user').exec()
        res.json(allUserPosts)
    } catch (err) {
        console.log(err)
    }
}

async function addComment(req, res) {
    try {
        const currentPost = await Post.findById(req.body.postId).exec()

        currentPost.comment.push({ content: req.body.content, user: req.user._id});
        console.log(currentPost.comment)
        await currentPost.save();
        const allPosts = await Post.find({}).populate('comment').populate('user').populate('book').populate('comment.user').sort({comment: 'asc'}).exec()
        res.json(allPosts);
    } catch (err) {
        console.log(err)
    }
}