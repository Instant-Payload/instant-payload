import React from 'react';
import data from './productData.js';
import Cards from './Cards.jsx';

//example data includes the item name, price, and image
const DisplayCard = () => {
  return (
    <section>
      {data.productItems.map((item) => {
        return (
          <div key={item.id}>
            <Cards name={item.name} price={item.price} image={item.image}/>
          </div>
        );
      })}
    </section>
  );
};

export default DisplayCard;
