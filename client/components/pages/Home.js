import { useEffect, useState } from "react";
import DisplayCard from "../displayCard.jsx";
import Axios from 'axios';

export default function Home() {
    const [items, getItems] = useState([]);

    useEffect(() => {
        getAllItems();
    }, []);

    const getAllItems = () => {
        Axios.get("http://localhost:3000/api/all")
        .then((response) => {
            console.log('response.data', response.data);
            const allItems = response.data;
            getItems(allItems);
        })
        .catch((err) => console.log(`Error: ${err}`));
    }

   

    return(
        <>
            <DisplayCard items={items} />
        </>
    )
     
}