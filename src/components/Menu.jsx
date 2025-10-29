import React, { useState, useEffect } from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/slices/CategorySlice";
import { useDispatch,useSelector } from "react-redux";

const Menu = () => {

  
  const dispatch = useDispatch();

  // it's use for store the dynamic categories
  const [categories, setCategories] = useState([])

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  }

  // useEffect for when the page is render then the all categories are set up
  useEffect(() => {
    listUniqueCategories();
  }, []);
  

  const selectCategory = useSelector((state) => state.category.category)
  console.log(selectCategory);
  
  return (
    <div className="ml-4">
      <h3 className="text-gray-400 font-semibold"> Find the best food</h3>
      <div className="flex my-4 gap-4 mx-2 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <button
        onClick={()=> dispatch(setCategory("All"))}
          className={`px-2 py-2 bg-gray-200 rounded-lg text-black hover:bg-green-500 hover:text-white ${selectCategory === "All" && "bg-green-500 text-white"}`}
        >All</button>
        {categories.map((category,index)=>{
          return (
            <button
              key={index}
              onClick={()=> dispatch(setCategory(category))}
              className={`px-2 py-2 bg-gray-200 rounded-lg text-black hover:bg-green-500 hover:text-white ${selectCategory === category && "bg-green-500 text-white"}`}
        >{category}</button>
          )
        })}
      </div>
    </div>
  );
};

export default Menu;
