import React, { useEffect, useState } from "react";
import { category } from "../constants/data";
import ReactLogo from "../assets/images/react.svg";
import { FaStar, FaRegStar } from "react-icons/fa";

const Card = () => {
  const [categories, setCategories] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setCategories(category[0].categories);
  }, []);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  }; 
  return (
    <div className="w-full px-5 sm:px-10 md:px-20 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div className="border-1 border-solid border-[#BFBFBF] rounded-[30px] me-2 overflow-hidden hover:shadow-md hover:shadow-[#2E82D0]/25 cursor-pointer">
            {/* Top section with icon and star */}
            <div
              key={index}
              className="p-6 flex flex-col items-center relative"
            >
              {/* Star icon in the top right */}
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={toggleFavourite}
              >
                {isFavourite ? (
                  <FaStar
                    className="w-6 h-6 text-yellow-400"
                  />
                ) : (
                  <FaRegStar className="w-6 h-6 text-yellow-600" />
                )}
              </div>

              {/* Title and category icon */}
              <div className="text-center">
                <img
                  src={ReactLogo}
                  alt="Category Icon"
                  width={70}
                  height={70}
                  className="mx-auto"
                />
                <h6 className="mt-4 text-[#1C75C7] font-bold text-lg">
                  {" "}
                  {category.category_name}
                </h6>
              </div>
            </div>

            {/* Bottom section with description */}
            <div className="bg-[#2E82D0] flex items-center text-center px-4 h-24">
              <p className="text-white text-sm font-bold">
                0-4 yaş çocuğu olan Annelerimize ücretsiz ulaşım desteği
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
