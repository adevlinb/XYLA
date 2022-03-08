// async function addBook(req, res) {
//     const newBook = await Book.formatBookInfo(req.body);
//     const formattedBook = await Book.newBook(newBook);
//     const shelf = await Bookshelf.findOne({ userId: req.user._id }).exec();

//     // calling toString() on an object returns '[object Object]'
//     let inShelf = shelf.userBookSchema.find(b => b.book.toString() === formattedBook._id.toString())
//     // try this instead
//     let inShelf = shelf.userBookSchema.some(userBook => userBook.book._id.equals(formattedBook._id));

//     console.log(inShelf);
//     if (inShelf) {
//         console.log("item in shelf");

//         // the client is just going to keep waiting for a response
//         return;
//     }

//     console.log("item not in shelf")
//     shelf.userBookSchema.push({ book: formattedBook._id })

//     // should await the save() method
//     shelf.save()

//     const updatedShelf = await Bookshelf.findOne({ userId: req.user._id })

//         // the array that's wrapping the object being provided to populate
//         // plus, the path should be an ObjectId
//         .populate([{ path: 'userBookSchema', populate: { path: 'book', model: Book } }]).exec();
//         // try this and let me know...
//         // .populate('userBookSchema.book').exec();

//     console.log(updatedShelf, "updated shelf")
//     res.json(updatedShelf);
// }
// // I also recommend changing the name of the useBookSchema property in the bookshelfSchema to something else, e.g.:
// // books: [userBookSchema],
// //     or if you're concerned about not knowing that a user's bookshelf contains user books, then:
// // userBooks: [userBookSchema],