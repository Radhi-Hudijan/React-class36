import React from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

import ProductItem from "./ProductItem";

const ProductList = ({ category }) => {
  const endPoint = category === "" ? "" : `category/${category}`;

  const { data: products, loading, error } = useFetch(endPoint);

  return (
    <>
      {loading && (
        <div>
          {" "}
          <h3 className="loading">Loading...</h3>
        </div>
      )}

      {error && <div>There is an error : {error}</div>}

      <ul className="products">
        {products.map((product) => {
          let id = `/product/${product.id}`;
          return (
            <Link to={id} className="product-item">
              {" "}
              <ProductItem key={product.id} product={product} />
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
