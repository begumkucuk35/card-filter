import React, { useEffect, useState } from "react";
import { category, person } from "../constants/data";

const FilterTab = () => {
  const [categories, setCategories] = useState([]);
  const [personCategory, setPersonCategory] = useState([]);

  useEffect(() => {
    setCategories(category[0].categories);
    setPersonCategory(person[0].categories);
  }, []);
  return (
    <div className="w-full px-5 sm:px-10 md:px-20 py-5">
      <div className="my-2">
        <h1 className="text-lg font-semibold my-2 cursor-pointer hover:underline">{person[0].title}</h1>
        <ul className="flex flex-wrap">
          {personCategory.map((person, index) => (
            <li
              key={index}
              className="px-3 py-1 border-1 border-solid rounded-full me-2 my-1 border-[#2E82D0] cursor-pointer hover:shadow-md hover:shadow-[#2E82D0]/25"
            >
              <p className="text-[#4B4B4B] font-semibold text-sm">
                {person.person_category}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-2">
        <h1 className="text-lg font-semibold my-2 cursor-pointer hover:underline">{category[0].title}</h1>
        <ul className="flex flex-wrap">
          {categories.map((category, index) => (
            <li
              key={index}
              className="px-3 py-1 border-1 border-solid rounded-full me-2 border-[#2E82D0] cursor-pointer hover:shadow-md hover:shadow-[#2E82D0]/25"
            >
              <p className="text-[#4B4B4B] font-semibold text-sm">
                {category.category_name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterTab;
