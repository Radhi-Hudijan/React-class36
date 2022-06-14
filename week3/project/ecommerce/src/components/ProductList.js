import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

import ProductItem from "./ProductItem";

const ProductList = ({ category }) => {
  const endPoint = category === "" ? "" : `category/${category}`;

  const { data: products, loading, error } = useFetch(endPoint);

  return (
    <>
      {loading && (
        <div>
          <h3 className="loading">Loading...</h3>
        </div>
      )}

      {error && <div>There is an error : {error}</div>}

      <ul className="products">
        {products.map((product) => {
          let route = `/product/${product.id}`;
          return (
            <Link to={route} className="product-item" key={product.id}>
              <ProductItem product={product} />
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
