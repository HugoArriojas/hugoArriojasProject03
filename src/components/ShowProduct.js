// Component to render the items on the page
import ExtraDetails from "./ExtraDetails";
import { useState, useEffect } from 'react';

import firebase from './firebase';
import { getDatabase, ref, onValue, push} from 'firebase/database';

function ShowProduct(props) {

    // Holds the description open state
    const [descOpen, setDescOpen] = useState(false);

    // holds the selected item image
    const [itemImg, setItemImg] = useState("")
    // holds the selected item title
    const [itemTitle, setItemTitle] = useState("")  


    // Toggles the descOpen from true to false or vice versa every time the button is clicked
    const toggleShowDesc = (item) => {
        setDescOpen(!descOpen);
        // props.handleItemSelection(item)
        setItemImg(item.target.src)
        setItemTitle(item.target.alt)
    }
    
     // Handle Add To Cart function
    const handleAddToCart = (event) => {
        event.preventDefault();
        // create a reference to our database
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        // push the value of the `selected item` state to the database
        push(dbRef, itemTitle, itemImg);

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
          newState.push(data[key]);
        //   newState.push({key: key, name: data[key]});
        }
        // updating component's state using the local array newState
        setItems(newState);
      })
    }, [])

    return (
        <>
            <div className="itemContainer"
                key={props.key}
                onClick={toggleShowDesc}
            >
                <div className="itemImage">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="itemText">
                    <h3 className="itemTitle">{props.title}</h3>
                    <div className="itemInfo">
                        <div className="priceBubble">
                            <p className="itemPrice">{props.price}</p>
                        </div>
                        <p className="itemRating">{props.rating} ★</p>
                        <p className="itemCount">({props.count} ratings)</p>
                    </div>
                </div>
            </div>

            {/* if descOpen is true, show the expanded info */}
            {descOpen ?
                <ExtraDetails
                    handleClose={toggleShowDesc}
                    // handleAddToCart={props.handleAddToCart}
                    handleAddToCart={handleAddToCart}
                    image={props.image}
                    title={props.title}
                    description={props.description}
                    price={props.price}
                    rating={props.rating}
                    count={props.count}
                />
                : null // basically show nothing if it isn't clicked
            }

        </>
    )
}

export default ShowProduct;



