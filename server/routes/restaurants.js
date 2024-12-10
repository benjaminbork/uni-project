const express = require('express');
const router = express.Router();
const mockData = require('../data/MOCK_DATA-5.json');
const Review = require('../models/review');

router.get('/', (req, res) => {
  //Mapping data to send only required fields
  const output = mockData.map((restaurant) => ({
    id: restaurant.id,
    name: restaurant.restaurant_name,
    cuisine: restaurant.cuisine,
    diet: restaurant.diet,
    star: restaurant.star,
    reviews: restaurant.reviews,
    location: restaurant.location,
  }));

  res.json(output);
});

module.exports = router;