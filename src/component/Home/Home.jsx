/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import './Home.css';

const Home = () => {
  
  const [ addCart , setAddCart ] = useState([]);
  const dataShirt = useLoaderData();


  const addToCart = tShirt => {
    const exit = addCart.find(data => data._id == tShirt._id);
    if (exit){
      toast('this cart added');
    }else{
      const newCart = [...addCart, tShirt]
      setAddCart(newCart);
    }
  }

  const removeFromCart = id => {
    const remaning = addCart.filter( data => data._id !== id );
    setAddCart(remaning);
  }
  
  return (
    <div className="container">
      <div className="product">
        {dataShirt.map((data) => (
          <Tshirt key={data.index} tshirt={data}  addToCart={addToCart} ></Tshirt>
        ))}
      </div>
      
      <div className="cart">
          <Cart cartData={addCart} removeFromCart={removeFromCart}></Cart>
      </div>
      
    </div>
  );
};

export default Home;
