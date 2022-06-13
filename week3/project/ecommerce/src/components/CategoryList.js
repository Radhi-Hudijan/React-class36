import React, { useState } from "react";
import useFetch from "./useFetch";

const CategoryList = ({ setSelectedCategory }) => {
  //active category state
  const [categoryState, setCategoryState] = useState({ activeCategory: null });

  const { data: categories, loading, error } = useFetch("categories");

  // toggle the active category
  const toggleActive = (index) => {
    setCategoryState({
      ...categoryState,
      activeCategory: categories[index],
    });
  };

  // add the style class to active category
  const toggleActiveStyle = (index) => {
    if (categories[index] === categoryState.activeCategory) {
      return "item-selected";
    }
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
                setSelectedCategory(category);
                toggleActive(index);
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
