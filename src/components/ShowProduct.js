// Component to render the items on the page

import HoverText from "./HoverText";
import ExtraDetails from "./ExtraDetails";
import { useState } from 'react';

function ShowProduct(props) {

    // Holds the description open state
    const [descOpen, setDescOpen] = useState(false);

    // Toggles the descOpen from true to false or vice versa every time the button is clicked
    const toggleShowDesc = () => {
        setDescOpen(!descOpen);
    }

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



