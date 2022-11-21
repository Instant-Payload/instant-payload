import React, { useState, useEffect } from 'react';
import data from './productData.js';
import Cards from './Cards.jsx';
// import Items from './productData'

//example data includes the item name, price, and image
const DisplayCard = (props) => {
  const {items} = props;
  
// const result = data.productItems.filter((item) => item.category === 'Produce');
// console.log(result);
  
  return (
    <section className='itemFlex'>
      {items.map((item) => {
        return (
          <div key={item._id}>
            <Cards  id={item._id} name={item.name} price={item.price} image={item.image} />
          </div>
        );
      })}
    </section>
  );
};

export default DisplayCard;
