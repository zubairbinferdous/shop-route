/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt , addToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="product">
      <div className="shirt_area">
        <div className="data">
          <img src={picture} alt="" />
          <h1> {name} </h1>
          <h3> {price} </h3>
          <button className="button" onClick={ () => addToCart(tshirt) }> buy now </button>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
