import { useEffect, useState } from "react";
import DisplayCard from "../displayCard.jsx";
import Axios from 'axios';

export default function Cart() {
  const [items, cartItems] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/cart")
      .then((res) => {
        cartItems(res.data);
        return cartItems;
      })
      .catch((err) => console.log( `Error: ${err}`));
  }, []);

  return (
        <div className='shoppingCart'>
          <h1>Shopping Cart</h1>
          <div className='cartItems'>
            {/* do we want everything including add item button 
            maybe need to make a new page for Cart items??? 
            DisplayCard is just a placeholder for now to know that our GET req is working*/}
            <DisplayCard items={items} />
          </div>
        </div>
  )
}