const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const reviewRoutes = require('./routes/reviews');
const reservationRoutes = require('./routes/reservations');
const searchRoutes = require('./routes/search')
const allRestaurants = require('./routes/restaurants')


const app = express();

app.use(express.json());
app.use(cors());

//DB Connection
mongoose.connect('mongodb://admin:admin@localhost:27017/admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));


app.use('/user', userRoutes);
app.use('/restaurants', allRestaurants);
app.use('/search', searchRoutes);
app.use('/reviews', reviewRoutes);
app.use('/reservation', reservationRoutes);

//Server PORT
app.listen(2000, () => {
    console.log('Server is running on port 2000');
});
