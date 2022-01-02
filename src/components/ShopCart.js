// App.js
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
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
                newState.push(key);
                newState.push({key: key, name: data[key]});
            }
            // updating component's state using the local array newState
            setItems(newState);
        })
    }, [])

    // this function takes an argument, which is the ID of the item we want to remove
    const handleRemoveItem = (itemId) => {
        // here we create a reference to the database 
        // this time though, instead of pointing at the whole database, we make our dbRef point to the specific node of the item we want to remove
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${itemId}`);
        console.log(itemId)
        
        // using the Firebase method remove(), we remove the node specific to the item ID
        remove(dbRef)
    }

    return (
        <div className='shopCart'>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.key}>
                            <p>{item.name} - {item.key}</p>
                            <button onClick={() => handleRemoveItem(item.key)}> Remove </button>
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