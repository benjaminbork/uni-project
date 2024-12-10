const mongoose = require('mongoose');

//Restaurant model
const restaurantSchema = new mongoose.Schema({
    restaurant_name: String,
    time_availability: Object,
    cuisine: String,
    diet: String,
    star: Number,
    reviews: Number,
    location: Object,
});
module.exports = mongoose.model('Restaurant', restaurantSchema);
