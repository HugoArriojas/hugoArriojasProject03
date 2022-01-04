
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import firebase from "./Firebase";
import "../stylesheets/ShopCart.css"

function ShopCart() {
    // Holds the description open state
    const [cartOpen, setCartOpen] = useState(false);

    const handleCart = () => {
        setCartOpen(!cartOpen);
    }

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
                newState.push({ key: key, name: data[key] });
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
        <>
            {cartOpen ?
                <>
                    <div className="blocker" onClick={handleCart}></div>
                    <div className="shopCart">
                        <h2 className="yourCart">Here is your cart:</h2>
                        <button className="closeButton" onClick={handleCart} aria-label="closePopupWindow">X</button>
                        <ul className="cartList">
                            {items.length === 0
                                ? <h2 className="yourCart emptyCart"> Your cart is empty!</h2>
                                : items.map((item) => {
                                    return (
                                        <li key={item.key} className="cartItem">
                                            <div className="cartImage">
                                                <img src={item.name.image} alt={item.name.title} />
                                            </div>
                                            <div className="cartInfo">
                                                <p className="cartTitle">{item.name.title}</p>
                                                <div className="cartBubble">
                                                    <p className="cartPrice">{item.name.price}</p>
                                                </div>
                                            </div>
                                            <button className="cartRemove" onClick={() => handleRemoveItem(item.key)}> Remove </button>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </>
                :
                <div className="closedCart" onClick={handleCart}>
                    <i className="fas fa-shopping-cart cart"></i>
                    <div className="cartTriangle"></div>
                </div>
            }
        </>
    )
}

export default ShopCart