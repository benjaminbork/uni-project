const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const mockData = require('../data/MOCK_DATA-5.json');
const Reservation = require('../models/reservation');



router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { userId, restaurantId, time, dayOfWeek } = req.body;

    // Validate the userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send('Invalid userId');
    }

    // You can check if restaurantId is a number (optional)
    if (typeof restaurantId !== 'number') {
      return res.status(400).send('Invalid restaurantId');
    }     

    // //Check if user has already booked the time slot for this restaurant
    const existingReservation = await Reservation.findOne({
      userId: userId,
      restaurantId: Number(restaurantId),
      time,
      dayOfWeek,
    });

    if (existingReservation) {
      return res
        .status(400)
        .send('You have already booked this time slot for this restaurant.');
    }
    // Validate restaurantId against mock data
    const restaurant = mockData.find((r) => r.id === restaurantId);
    if (!restaurant) {
      return res.status(404).send('Invalid restaurantId');
    }

    //Record the reservation
    const reservation = new Reservation({
      userId: userId,
      restaurantId: restaurantId,
      time: time,
      dayOfWeek: dayOfWeek,
    });
    await reservation.save();

    //Update restaurant's time_availability
    const restaurantIndex = mockData.findIndex(
      (restaurant) => restaurant.id === restaurantId
    );

    if (
      restaurantIndex !== -1 &&
      mockData[restaurantIndex].time_availability[dayOfWeek]
    ) {
      mockData[restaurantIndex].time_availability[dayOfWeek] = mockData[
        restaurantIndex
      ].time_availability[dayOfWeek].filter((t) => t !== time);
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Error during reservation:', err);
    res.status(500).send('An error occurred');
  }
});

router.get('/availability/:restaurantId', async (req, res) => {
  const restaurantId = parseInt(req.params.restaurantId);

  //Find the restaurant with id
  const restaurant = mockData.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).send('Restaurant not found');
  }

  //Find all reservations for this restaurant
  const reservations = await Reservation.find({ restaurantId: restaurantId });

  //Clone the time avilability
  let availableTimeSlots = JSON.parse(
    JSON.stringify(restaurant.time_availability)
  );

  reservations.forEach((reservation) => {
    if (availableTimeSlots[reservation.dayOfWeek]) {
      const index = availableTimeSlots[reservation.dayOfWeek].indexOf(
        reservation.time
      );
      if (index > -1) {
        availableTimeSlots[reservation.dayOfWeek].splice(index, 1);
      }
    }
  });
  //Return the time_availability
  res.json(availableTimeSlots);
});

router.get('/bookings/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    //Validate it
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send('Invalid userId');
    }
    const bookings = await Reservation.find({ userId: userId });

    //Get the correstponding restaurant details for each booking from mock data
    const bookingDetails = bookings.map((booking) => {
      const restaurant = mockData.find((r) => r.id === booking.restaurantId);
      return {
        bookingId: booking._id,
        restaurantName: restaurant ? restaurant.restaurant_name : 'Unknown',
        time: booking.time,
        dayOfWeek: booking.dayOfWeek,
      };
    });
    res.json(bookingDetails);
  } catch (err) {
    console.error('Error fetching user bookings:', err);
    res.status(500).send('An error occurred');
  }
});

module.exports = router;
