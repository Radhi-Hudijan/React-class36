import React, { useState } from "react";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

import "./App.css";

function App() {
  // category state
  const [category, setCategory] = useState("");

  return (
    <>
      <Header></Header>
      <CategoryList setCategory={setCategory}></CategoryList>
      <ProductList category={category}></ProductList>
    </>
  );
}

export default App;
