import React from 'react';
import { useContext, useState } from 'react';

//data includes the name, price, and image of an item
const Cards = (item) => {
  const { name, price, image } = item;
  console.log(name);
  console.log(price);
  console.log(image);
  return (
    <div className="cards">
      <img
        src="https://m.media-amazon.com/images/I/618tW+-9JzL.jpg"
        height="100"
        width="auto"
      />
      <div className="item_details">
        <p>{name}</p>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
