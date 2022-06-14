import React, { useContext, useState, useEffect } from "react";
import Header from "./Header";
import { FavoriteIDContext } from "../contexts/favouritesIDsContext";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const FavoriteProducts = () => {
  const { favoriteIDs } = useContext(FavoriteIDContext);

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await Promise.all(
          favoriteIDs.map(async (id) => {
            const response = await fetch(
              `https://fakestoreapi.com/products/${id}`
            );
            const result = await response.json();
            return result;
          })
        );

        setFavoriteProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [favoriteIDs]);

  return (
    <>
      <Header />
      {loading && (
        <div>
          <h3 className="loading">Loading...</h3>
        </div>
      )}

      {favoriteIDs.length === 0 && (
        <h3>You haven't chosen any favourites yet!</h3>
      )}

      <ul className="products">
        {favoriteProducts.map((product) => {
          let route = `/product/${product.id}`;
          return (
            <Link to={route} className="product-item" key={product.id}>
              <ProductItem product={product} />
            </Link>
          );
        })}
      </ul>

      {error}
    </>
  );
};

export default FavoriteProducts;
