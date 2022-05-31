import React, { useState } from "react";
import categories from "../fake-data/all-categories";

const CategoryList = ({ setCategory }) => {
  //active category state
  const [categoryState, setCategoryState] = useState({ activeCategory: null });

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
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <div
              className={`categories-item ${toggleActiveStyle(index)}`}
              key={index}
              onClick={() => {
                setCategory(category);
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
