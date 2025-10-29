import React, { useState } from "react";
import ItemCart from "./ItemCart";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
const Cart = () => {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  // it's calcualte the total quantity of the cart 
  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0)

  // it's calcualte the total price of the  cart 
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)

  const haldleSuccessPage = () => {
    if(totalQuantity > 0){
      navigate('/success')
    }else{
      toast.error('You have no element ');
      navigate('/')
    }
    
  }
  return (
    <>
      <div
        className={`fixed top-0 right-0 bg-white lg:w-[20vw] h-full w-full p-5 ${activeCart ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="font-bold text-2xl text-gray-700">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="p-1 border-2 text-2xl rounded-lg bg-gray-300 hover:text-red-500 hover:border-red-500 cursor-pointer"
          />
        </div>

        {totalQuantity > 0 ? cartItems.map((food) => {
          return (
            <ItemCart
              id={food.id}
              key={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              qty={food.qty}
            />
          );
        }) : <img className="absolute transition-all  animate-bounce duration-1000 bottom-52" src="src\assets\empty-cart.png" />}

        <div className="absolute bottom-5">
          <h3 className="font-semibold text-gray-500">Items: <span className="text-black font-bold">{totalQuantity}</span></h3>
          <h3 className="font-semibold text-gray-500">Total Amount: <span className="text-black font-bold"> {totalPrice}</span> </h3>
          <hr className="w-[90vw] lg:w-[18vw]  my-2" />
          <button onClick={() => haldleSuccessPage() }
            className="bg-green-500  font-bold w-[90vw] lg:w-[18vw] text-white rounded-lg py-2">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`text-6xl bottom-5 fixed  right-5 p-4 shadow-md rounded-full cursor-pointer ${totalQuantity && "transition-all animate-bounce delay-500"}`}
      />
    </>
  );
};

export default Cart;
