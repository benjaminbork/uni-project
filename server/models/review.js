const mongoose = require('mongoose');

//Review model
const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    restaurantId: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Review', reviewSchema);
