const express = require('express');
const router = express.Router();
const mockData = require('../data/MOCK_DATA-5.json');

router.post('/', (req, res) => {
  const dayOfWeek = req.body.dayOfWeek;
  const time = req.body.time;
  let query = req.body.query ? req.body.query.toLowerCase() : null;

  if (!dayOfWeek || !time) {
    return res
      .status(400)
      .json({ error: 'dayOfWeek and time are required fields.' });
  }

  const results = mockData.filter((item) => {
    // Check for time availability on the given dayOfWeek
    if (
      item.time_availability[dayOfWeek] &&
      item.time_availability[dayOfWeek].includes(time)
    ) {
      // If no query is provided, consider it a match
      if (!query) {
        return true;
      }

      // Check if the query matches the diet
      if (item.diet && item.diet.toLowerCase().includes(query)) {
        return true;
      }

      // Check if the query matches the cuisine
      if (item.cuisine && item.cuisine.toLowerCase().includes(query)) {
        return true;
      }

      // Check if the query matches with the location
      if (item.location) {
        const { street, city, postcode } = item.location;
        if (
          street.toLowerCase().includes(query) ||
          city.toLowerCase().includes(query) ||
          postcode.toString().includes(query)
        ) {
          return true;
        }
      }
    }
    return false;
  });

  res.json(results);
});

module.exports = router;
