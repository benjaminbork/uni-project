const mongoose = require('mongoose');

//Reservation model
const reservationSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    restaurantId: Number,
    time: String,
    dayOfWeek: String
});
module.exports = mongoose.model('Reservation', reservationSchema);
