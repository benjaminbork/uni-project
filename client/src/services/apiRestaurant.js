const API_URL = 'http://localhost:2000';

export async function getRestaurants() {
  const res = await fetch(`${API_URL}/restaurants`);

  if (!res.ok) throw Error('Failed getting restaurants');

  const restaurants = await res.json();
  return restaurants;
}

export async function getRestaurantById(id) {
  // 1. GET ALL RESTAURANTS
  const res = await fetch(`${API_URL}/restaurants`);

  if (!res.ok) throw Error('Failed getting restaurant');

  const restaurants = await res.json();

  // 2. FILTER BY ID

  const restaurant = await restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  return restaurant;
}

export async function getRestaurantReviews(id) {
  const res = await fetch(`${API_URL}/reviews/${id}`);

  if (!res.ok) throw Error('Failed getting restaurant reviews');

  const restaurantReviews = await res.json();
  return restaurantReviews;
}

export async function getBookingByUserId(id) {
  const res = await fetch(`${API_URL}/reservation/bookings/${id}`);

  if (!res.ok) throw Error('Failed getting bookings');

  const bookings = await res.json();
  return bookings;
}
export async function getRestaurantAvailibility(id) {
  const res = await fetch(`${API_URL}/reservation/availability/${id}`);

  if (!res.ok) throw Error('Failed getting restaurant availability');

  const restaurantAvailibility = await res.json();
  return restaurantAvailibility;
}
//API for posting new reservation
export async function createReservation({
  userId,
  restaurantId,
  dayOfWeek,
  time,
}) {
  const data = { userId, restaurantId, dayOfWeek, time };
  const res = await fetch(`${API_URL}/reservation/`, {
    method: 'POST',

    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const response = await res.json();

  return response;
}

export async function createSearch({ date, time, query }) {
  // convert to weekday
  var weekday = new Array(7);
  weekday[0] = 'Monday';
  weekday[1] = 'Tuesday';
  weekday[2] = 'Wednesday';
  weekday[3] = 'Thursday';
  weekday[4] = 'Friday';
  weekday[5] = 'Saturday';
  weekday[6] = 'Sunday';

  const dayOfWeek = weekday[date.$d.getDay() - 1];

  // convert to hours
  function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }
  const hours = time.$d.getHours();
  time = `${addZeroBefore(hours)}:00`;
  var data;
  if (query) {
    data = { dayOfWeek, time, query };
  } else {
    data = { dayOfWeek, time };
  }

  const res = await fetch(`${API_URL}/search/`, {
    method: 'POST',

    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const response = await res.json();
  return response;
}

//API for posting new review
export async function createReview({
  userId,
  username,
  restaurantId,
  review,
  rating,
}) {
  const data = { userId, username, restaurantId, review, rating };

  const res = await fetch(`${API_URL}/reviews/review/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const response = await res.json();
  return response;
}
