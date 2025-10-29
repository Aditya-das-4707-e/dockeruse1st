import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
import { increamentItem } from "../redux/slices/CartSlice";
import { decreamentItem } from "../redux/slices/CartSlice";
import toast, { Toaster } from 'react-hot-toast';
const ItemCart = ({ id, img, name, price, qty }) => {
  const handleError = (name) =>{
    toast(`${name} Removed!`, {
      icon: "👋",
    });
  }
  const dispatch = useDispatch();
  return (
    <div className="flex bg-gray-200 gap-2 m-3 mb-5 p-2 shadow-md rounded-lg">
      <MdDelete
        onClick={() => { 
              handleError(name)
          dispatch(removeFromCart({ id })) }}
        className="absolute right-12 cursor-pointer text-gray-700"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2>{name}</h2>
        <div className="flex gap-20 ">
          <span className="font-bold ">₹{price}</span>
          <div className="flex absolute right-10 gap-2 justify-between items-center ">

            <FaMinus
              onClick={() => dispatch(decreamentItem({ id }))}
              className="border-2 text-gray-600 cursor-pointer border-gray-400 hover:border-none text-xl hover:bg-green-500 p-1 rounded-lg hover:text-white transition-all ease-linear"
            />
            <span className="font-bold">{qty}</span>
            <FaPlus onClick={() => dispatch(increamentItem({ id }))} className="border-2  text-gray-600 cursor-pointer border-gray-400 hover:border-none text-xl hover:bg-green-500 p-1 rounded-lg hover:text-white transition-all ease-linear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
