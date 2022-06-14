import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const CategoryList = ({ setSelectedCategory }) => {
  //active category state
  const [activeCategory, setActiveCategory] = useState("");
  const { data: categories, loading, error } = useFetch("categories");

  // toggle the active category
  const toggleActive = (index, category) => {
    if (activeCategory === categories[index]) {
      setSelectedCategory("");
      setActiveCategory("");
    } else {
      setSelectedCategory(category);
      setActiveCategory(categories[index]);
    }
  };

  // add the style class to active category
  const toggleActiveStyle = (index) => {
    return categories[index] === activeCategory
      ? "item-selected"
      : "item-unSelected";
  };
  return (
    <>
      {loading && (
        <div>
          <h3 className="loading">Loading...</h3>
        </div>
      )}

      {error && <div>There is an error : {error}</div>}
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <div
              className={`categories-item ${toggleActiveStyle(index)}`}
              key={index}
              onClick={() => {
                toggleActive(index, category);
              }}
            >
              {category}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryList;
