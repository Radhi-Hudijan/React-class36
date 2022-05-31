import React from "react";
import allProducts from "../fake-data/all-products";
import ProductItem from "./ProductItem";

const ProductList = ({ category }) => {
  //filter products based on selected category
  const filteredProduct = allProducts.filter((product) => {
    return product.category === category.slice(6);
  });

  const products =
    filteredProduct.length === 0 ? [...allProducts] : [...filteredProduct];

  return (
    <ul className="products">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
