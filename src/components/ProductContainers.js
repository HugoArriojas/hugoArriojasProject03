// Component to render the items on the page
import ExtraDetails from "./ExtraDetails";
import { useState } from 'react';
import firebase from './firebase';
import { getDatabase, ref, push } from 'firebase/database';
import "../stylesheets/ProductContainers.css"

function ProductContainers(props) {

    // Holds the description open state
    const [descOpen, setDescOpen] = useState(false);

    // Toggles the descOpen from true to false or vice versa every time the button is clicked
    const toggleShowDesc = () => {
        setDescOpen(!descOpen);
    }

    // Handle Add To Cart function
    const handleAddToCart = () => {
        // create a reference to our database
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        let cartItem = {
            title: props.title,
            image: props.image,
            price: props.price,
            rating: props.rating,
            desc: props.description
        }
        // push the value of the `selected item` state to the database
        push(dbRef, cartItem);
    }


    return (
        <>
            <div className="itemContainer"
                key={props.key}
                tabIndex={0}
                onClick={toggleShowDesc}
                // Making it so that the product containers can be selected using the enter key
                onKeyUp={(e) => { if (e.key === 'Enter') toggleShowDesc(e) }}
            >
                <div className="itemImage">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="itemText">
                    <h3 className="itemTitle">{props.title}</h3>
                    <div className="itemInfo">
                        <p className="itemPrice priceBubble">{props.price}</p>
                        <div className="ratings">
                            <p className="itemRating">{props.rating} ★</p>
                            <p className="itemCount">({props.count} ratings)</p>
                        </div>
                        <p className="descNull">{props.description}</p>
                    </div>
                </div>
            </div>

            {/* if descOpen is true, show the expanded info */}
            {descOpen ?
                <ExtraDetails
                    handleClose={toggleShowDesc}
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

export default ProductContainers;



