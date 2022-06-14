import React, { createContext, useState } from "react";

export const FavoriteIDContext = createContext();

export const FavoriteIdProvider = ({ children }) => {
  const [favoriteIDs, setFavoriteIDs] = useState([]);
  console.log(favoriteIDs);

  // get the favorite products ids and put them into array
  const getFavoritesID = (productId) => {
    if (favoriteIDs.includes(productId)) {
      let filteredFavoriteIDs = favoriteIDs.filter((id) => productId !== id);
      setFavoriteIDs(filteredFavoriteIDs);
    } else {
      setFavoriteIDs([...favoriteIDs, productId]);
    }
  };

  return (
    <FavoriteIDContext.Provider
      value={{
        favoriteIDs: favoriteIDs,
        setFavoriteIDs: setFavoriteIDs,
        getFavoritesID,
      }}
    >
      {children}
    </FavoriteIDContext.Provider>
  );
};
