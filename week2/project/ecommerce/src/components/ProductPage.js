import React from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const ProductPage = () => {
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
      <div className="card">
        {" "}
        <div className="card-content">
          <h1>{productDetails.title}</h1>
          <p className="price">${productDetails.price}</p>
          <p>{productDetails.description}</p>
        </div>
        <div className="card-img">
          <img src={productDetails.image} alt={productDetails.title} />
        </div>
      </div>
    </>
  );
};
export default ProductPage;
