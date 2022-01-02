// App.js
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './firebase';

function ShopCart() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        // var holds database details
        const database = getDatabase(firebase)
        // reference the database
        const dbRef = ref(database)
        // adding event listener to database
        onValue(dbRef, (response) => {
            // var to store the items
            const newState = [];
            // storing firebase response in data
            const data = response.val();
            // iterating through data to get each item name
            for (let key in data) {
                // push each item to an array 
                newState.push(data[key]);
            }

            // updating component's state using the local array newState
            setItems(newState);
        })
    }, [])

    return (
        <div className='shopCart'>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.key}>
                            <p>{item}</p>
                        </li>
                    )
                })}
            </ul>
            <i
                className="fas fa-shopping-cart cart"
            >

            </i>
        </div>
    )
}

export default ShopCart