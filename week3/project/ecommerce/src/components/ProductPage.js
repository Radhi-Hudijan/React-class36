import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { ReactComponent as RegularHeart } from "../assets/heart-regular.svg";
import { ReactComponent as SolidHeart } from "../assets/heart-solid.svg";
import { FavoriteIDContext } from "../contexts/favouritesIDsContext";
import Header from "./Header";

const ProductPage = () => {
  const { favoriteIDs, getFavoritesID } = useContext(FavoriteIDContext);
  const { id } = useParams();

  const { data: productDetails, loading, error } = useFetch(id);

  if (loading) {
    return (
      <div>
        <h3 className="loading">Loading...</h3>
      </div>
    );
  }

  if (error) {
    return <div>There is an error : {error}</div>;
  }

  return (
    <>
      <Header />
      <div className="card">
        <div className="card-content">
          <h1>{productDetails.title}</h1>
          <p className="price">${productDetails.price}</p>
          <p>{productDetails.description}</p>

          {favoriteIDs.includes(+id) ? (
            <SolidHeart
              className="favorite-img"
              onClick={() => {
                console.log(`Heart Clicked for product ID:${id}`);
                getFavoritesID(+id);
              }}
            />
          ) : (
            <RegularHeart
              className="favorite-img"
              onClick={() => {
                console.log(`Heart Clicked for product ID:${id}`);
                getFavoritesID(+id);
              }}
            />
          )}
        </div>
        <div className="card-img">
          <img src={productDetails.image} alt={productDetails.title} />
        </div>
      </div>
    </>
  );
};
export default ProductPage;
