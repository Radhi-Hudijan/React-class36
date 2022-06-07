import React from "react";

const ProductItem = ({ product }) => {
  const { title, image } = product;
  return (
    <li>
      <div className="product">
        <img className="product-img" src={image} alt={title} />
        <h3 className="product-title">{title}</h3>
      </div>
    </li>
  );
};

export default ProductItem;
