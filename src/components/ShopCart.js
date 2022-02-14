
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import firebase from "./firebase";
import "../stylesheets/ShopCart.css"
import CartDetails from "./CartDetails";

function ShopCart() {
    // Holds the description open state
    const [cartOpen, setCartOpen] = useState(false);
    // Holds the items in the cart
    const [items, setItems] = useState([]);
    // holds the number of items in the cart
    const [cartNumber, setCartNumber] = useState(0);
    // Holds the "extra details" state for the cart
    const [cartDetailsOpen, setCartDetailsOpen] = useState(false);
    // Holds the state for the selected cart item that you want the extra details on
    const [cartImage, setCartImage] = useState("");
    const [cartTitle, setCartTitle] = useState("");
    const [cartRating, setCartRating] = useState("");
    const [cartPrice, setCartPrice] = useState("");
    const [cartDesc, setCartDesc] = useState("");

    // Hold the checkout price information for all cart items
    const [cartTotal, setCartTotal] = useState(0);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartShipping, setCartShipping] = useState(0);


    // useEffect so that each time an item is added to the cart, the "cart bubble" is updated
        // Also calculates the cart total every time an ittem is added or removed
    useEffect(() => {
        setCartNumber(items.length);

        // Takes the prices in the cart and removes all text except decimals and coverts the remaining string to a number
        let cartPricesArray = items.map(item =>
            Number(item.name.price.replace(/[^\d.]/g, ''))
        );
        // Array of cartPrices is reduced to a total with 2 decimal points
        let cartPriceAddition = cartPricesArray.reduce((prevValue, currValue) => prevValue + currValue, 0).toFixed(2)
        // Cart total, taxes, and shipping are set
        setCartSubtotal(cartPriceAddition)
        setCartTax((cartPriceAddition * 0.15).toFixed(2))
        setCartShipping((cartPriceAddition * 0.05).toFixed(2))
        setCartTotal((cartPriceAddition * 1.2).toFixed(2))
    }, [items])


    // Opens and closes the cart based on click
    const handleCart = () => {
        setCartOpen(!cartOpen);
    }

    // Closes the cart
    const toggleCartClose = () => {
        setCartDetailsOpen(!cartDetailsOpen);
    }

    // Pulling the data of cart items from Firebase
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

    // Shows extra details for items stored in the cart
    const detailButton = (e) => {
        setCartImage(e.currentTarget.parentElement.parentElement.children[0].firstChild.src)
        setCartTitle(e.currentTarget.parentElement.children[0].innerText)
        setCartRating(e.currentTarget.parentElement.children[2].innerText)
        setCartPrice(e.currentTarget.parentElement.children[1].innerText)
        setCartDesc(e.currentTarget.parentElement.children[3].innerText)
        setCartDetailsOpen(!cartDetailsOpen);
    }


    // this function takes an argument, which is the ID of the item we want to remove
    const handleRemoveItem = (itemId) => {
        // here we create a reference to the database 
        // this time though, instead of pointing at the whole database, we make our dbRef point to the specific node of the item we want to remove
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${itemId}`);

        // using the Firebase method remove(), we remove the node specific to the item ID
        remove(dbRef)
    }


    return (
        <>
            {cartOpen ?
                <>
                    {/* Blocker in case users don't want to x out of the window */}
                    <div className="blocker" onClick={handleCart}></div>
                    <div className="shopCart">
                        <h2 className="yourCart">Here is your cart:</h2>
                        {/* hides absolutely positioned close button when cart details are open */}
                        {!cartDetailsOpen ?
                            <button className="closeButton" onClick={handleCart} aria-label="closePopupWindow">X</button>
                            : null
                        }
                        <ul className="cartList">
                            {items.length === 0
                                ? <h2 className="yourCart emptyCart"> Your cart is currently empty!</h2>

                                : items.map((item) => {
                                    return (
                                        <>
                                            <li key={item.key} className="cartItem">
                                                <div className="cartImage">
                                                    <img src={item.name.image} alt={item.name.title} />
                                                </div>
                                                <div className="cartInfo">
                                                    <p className="cartTitle">{item.name.title}</p>
                                                    <div className="cartBubble">
                                                        <p className="cartPrice" id="cartPrice">{item.name.price}</p>
                                                    </div>
                                                    <p className="descNull">{item.name.rating}</p>
                                                    <p className="descNull">{item.name.desc}</p>
                                                    <button className="cartDetails"
                                                        onClick={detailButton}
                                                        // Making the containers tabbable for accessibility
                                                        tabIndex={0}
                                                        // Making it so that the results containers can be selected using the enter key
                                                        onKeyUp={(e) => { if (e.key === 'Enter') detailButton(e) }}>
                                                        More Details
                                                    </button>
                                                    <button
                                                        className="cartRemove remove1"
                                                        onClick={() => handleRemoveItem(item.key)}> Remove
                                                    </button>
                                                </div>{/* /cartInfo */}

                                                {/* Secondary remove button that's displayed depending on screen size */}
                                                <button
                                                    className="cartRemove remove2"
                                                    onClick={() => handleRemoveItem(item.key)}> Remove
                                                </button>
                                            </li> {/* /cartItem */}

                                            {/* if descOpen is true, show the expanded info */}
                                            {cartDetailsOpen ?
                                                <CartDetails
                                                    image={cartImage}
                                                    title={cartTitle}
                                                    desc={cartDesc}
                                                    price={cartPrice}
                                                    rating={cartRating}
                                                    handleClose={toggleCartClose}
                                                />
                                                : null
                                            }

                                        </>
                                    )
                                })}
                        </ul> {/* /cartList */}

                        <div className="cartMoney">
                            <p className="cartSubtotal">Subtotal: <span>{cartSubtotal}</span></p>
                            <p className="cartTax">Tax: <span>{cartTax}</span></p>
                            <p className="cartShipping">Shipping: <span>{cartShipping}</span></p>
                            <p className="cartTotal">Cart Total: <span>{cartTotal}</span></p>
                        </div>

                    </div> {/* /shopCart  */}
                </>
                :
                <div className="closedCart"
                    onClick={handleCart}
                >
                    <i className="fas fa-shopping-cart cart"></i>
                    {items.length > 0
                        ? <div className="cartNumberBubble">
                            <p className="cartNumber">{cartNumber}</p>
                        </div>
                        : null
                    }
                    {/* Cart triangle that is on the top right of the screen*/}
                    <div
                        className="cartTriangle"
                        tabIndex={0}
                        onKeyUp={(e) => { if (e.key === 'Enter') handleCart(e) }}
                    ></div>
                </div> // </closedCart>
            }
        </>
    )

}

export default ShopCart