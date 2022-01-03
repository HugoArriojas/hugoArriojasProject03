// Component to render the items on the page
import ExtraDetails from "./ExtraDetails";
import { useState} from 'react';

import firebase from './firebase';
import { getDatabase, ref, push} from 'firebase/database';

function ShowProduct(props) {

    // Holds the description open state
    const [descOpen, setDescOpen] = useState(false);

    // holds the selected item image
    const [itemImg, setItemImg] = useState("")
    // holds the selected item title
    const [itemTitle, setItemTitle] = useState("")  
    // holds the selected item price
    const [itemPrice, setItemPrice] = useState("")  


    // Toggles the descOpen from true to false or vice versa every time the button is clicked
    const toggleShowDesc = (item) => {
        setDescOpen(!descOpen);
        if (descOpen === false) {
            setItemImg(item.currentTarget.firstChild.firstChild.currentSrc)
            setItemTitle(item.currentTarget.firstChild.firstChild.attributes.alt.value)
            setItemPrice(item.currentTarget.childNodes[1].childNodes[1].childNodes[0].childNodes[0].firstChild.data)
        }
    }
    
     // Handle Add To Cart function
    const handleAddToCart = () => {
        // create a reference to our database
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        let cartItem = {
            title: itemTitle,
            image: itemImg,
            price: itemPrice
        }
        // push the value of the `selected item` state to the database
        push(dbRef, cartItem);
    }


    return (
        <>
            <div className="itemContainer"
                key={props.key}
                onClick={toggleShowDesc}
                tabIndex={0}
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



