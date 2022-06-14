import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteProducts from "./components/FavoriteProducts";

import { FavoriteIdProvider } from "./contexts/favouritesIDsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoriteIdProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorite" element={<FavoriteProducts />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  </FavoriteIdProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
