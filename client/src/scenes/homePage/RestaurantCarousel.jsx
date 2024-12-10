import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RestaurantCard from '../../components/RestaurantCard';
import { useMediaQuery } from '@mui/material';

const RestaurantCarousel = ({ restaurants }) => {
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');
  const isNonLargeScreen = useMediaQuery('(min-width: 1200px)');

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: isNonMediumScreen ? (isNonLargeScreen ? 4 : 3) : 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <Slider {...settings}>
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} key={restaurant.id} />
      ))}
    </Slider>
  );
};

export default RestaurantCarousel;
