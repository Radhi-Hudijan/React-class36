import React, { useState } from "react";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

import "./App.css";

function App() {
  // category state
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Header></Header>
      <CategoryList setSelectedCategory={setSelectedCategory}></CategoryList>
      <ProductList category={selectedCategory}></ProductList>
    </>
  );
}

export default App;
