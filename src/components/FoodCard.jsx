import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
// 2:47:00 last 09-10-2024
const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] bg-white flex flex-col gap-3 font-bold p-5 rounded-lg">
      <img
        src={img}
        alt="picture"
        className="w-auto h-[130px] hover:scale-110 transition-all duration-700 ease-in-out"
      />
      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>

      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between mt-auto">
        <span className="flex justify-center items-center gap-2">
          <FaStar className="text-yellow-500" /> {rating}
        </span>
        <button
          className="bg-green-500 p-1 rounded-lg hover:bg-green-600 text-sm"
          onClick={() => {
            dispatch(addToCart({ id, name, price, img, qty: 1 }));
            handleToast(name)}}
        >
          Add to Cart
        </button>
      </div>
    </div >
  );
};

export default FoodCard;
