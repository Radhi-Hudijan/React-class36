import React, { useContext } from "react";
import { ReactComponent as RegularHeart } from "../assets/heart-regular.svg";
import { ReactComponent as SolidHeart } from "../assets/heart-solid.svg";
import { FavoriteIDContext } from "../contexts/favouritesIDsContext";

const ProductItem = ({ product }) => {
  const { favoriteIDs, getFavoritesID } = useContext(FavoriteIDContext);
  const { title, image } = product;

  const handler = (e) => {
    e.preventDefault();
    console.log(`Heart Clicked for product ID:${product.id}`);

    getFavoritesID(product.id);
  };

  return (
    <li>
      <div className="product">
        <div className="product-image-container">
          <img className="product-img" src={image} alt={title} />
          {favoriteIDs.includes(product.id) ? (
            <SolidHeart className="favorite-img" onClick={handler} />
          ) : (
            <RegularHeart className="favorite-img" onClick={handler} />
          )}
        </div>

        <h3 className="product-title">{title}</h3>
      </div>
    </li>
  );
};

export default ProductItem;
