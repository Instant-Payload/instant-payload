import { STATES } from 'mongoose';
import React from 'react';
import { useContext, useState } from 'react';
import Axios from 'axios';

//data includes the name, price, and image of an item
const Cards = (item) => {
  const { id, name, price, image } = item;
  console.log(name);
  console.log(price);
  console.log(image);

  const addToCart = () => {
    Axios.post('http://localhost:3000/api/cart', 
      {
        "_id": id,
        "product_id": id
      }
    )
  }
  return (
    <div className="cards">
      <img
        src={image}
        className='photo'
      />
      <div className="item_details">
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addToCart} className='button'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
