const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const bookshelfSchema = new Schema({
    library: [{ type: Mongoose.Schema.Types.ObjectId, 
                ref: 'Book', 
                currentlyReading: false, 
                completed: false,
                startDate: {type: Date},
                endDate: {type: Date},
            }],
    recommendations: [{ type: Mongoose.Schema.Types.ObjectId, 
                        ref: 'Book',
                        personRecommending: user._id,
                    }],
    favorites: [{ type: Mongoose.Schema.Types.ObjectId, 
                  ref: 'Book' 
                }],
    userId: user._id,
}, {timestamps: true});


module.exports = mongoose.model('Bookshelf', bookshelfSchema);