import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <>
      <Navbar />
      <Menu/>
      <FoodItem/>
      <Cart/>
    </>
  );
};

export default Home;
