const filterSearchData = (filter, restaurants, queryclient) => {
  var filteredRestaurantsByCuisiness = [];
  var filteredRestaurantsByDiets = [];
  const tmpfilteredRestaurantsByCuisiness = [];
  const tmpfilteredRestaurantsByDiets = [];

  if (!filter) return;

  // 1. CHECK WHETER FILTER IS SET
  if (filter.cuisines.length === 0 && filter.diets.length === 0) {
    if (restaurants) {
      queryclient.setQueryData(['filter'], () => {
        return restaurants;
      });
      return restaurants;
    }
  }

  // 2. FILTER BY CUISINES

  if (filter.cuisines.length !== 0) {
    filter.cuisines.forEach(function (filteredValue) {
      restaurants.forEach(function (restaurant) {
        if (restaurant.cuisine === filteredValue)
          tmpfilteredRestaurantsByCuisiness.push(restaurant);
      });

      filteredRestaurantsByCuisiness = filteredRestaurantsByCuisiness.concat(
        tmpfilteredRestaurantsByCuisiness
      );
    });
  }

  // 3. FILTER BY DIETS

  if (filter.diets.length !== 0) {
    filter.diets.forEach(function (filteredValue) {
      restaurants.forEach(function (restaurant) {
        if (restaurant.diet === filteredValue)
          tmpfilteredRestaurantsByDiets.push(restaurant);
      });

      filteredRestaurantsByDiets = filteredRestaurantsByDiets.concat(
        tmpfilteredRestaurantsByDiets
      );
    });
  }

  // 4. RETURN FILTERED DATA

  queryclient.removeQueries(['filter']);

  queryclient.setQueryData(['filter'], () => {
    var tmpfilteredRestaurants = filteredRestaurantsByCuisiness.concat(
      filteredRestaurantsByDiets
    );
    var filteredRestaurants = tmpfilteredRestaurants.filter(
      (item, pos) => tmpfilteredRestaurants.indexOf(item) === pos
    );

    return filteredRestaurants;
  });
};

export default filterSearchData;
