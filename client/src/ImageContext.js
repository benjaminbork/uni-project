import { createContext, useContext, useState } from 'react';

const RandomImageContext = createContext();

export const useRandomImage = () => {
  return useContext(RandomImageContext);
};
//Context for randomazing images
export const RandomImageProvider = ({ children }) => {
  const [randomImages, setRandomImages] = useState({});

  const setRandomImageForRestaurant = (restaurantId, imageUrl) => {
    setRandomImages((currentImages) => ({
      ...currentImages,
      [restaurantId]: imageUrl,
    }));
  };

  return (
    <RandomImageContext.Provider value={{ randomImages, setRandomImageForRestaurant }}>
      {children}
    </RandomImageContext.Provider>
  );
};
