// Props here represent the props that we passed in App.js
//ie. key, image, alt(?), title, price, rating, description, count
// For the hover function
import HoverText from "./HoverText";

function ShowProduct(props) {

    return (
        <div className="itemContainer">
            < HoverText
                description={props.description}
                image={props.image}
                title={props.title}
            />
            <div className="itemText">
                <h3 className="itemTitle">{props.title}</h3>
                <div className="itemInfo">
                    <div className="priceBubble">
                        <p className="itemPrice">{props.price}</p>
                    </div>
                    <p className="itemRating">Rating: {props.rating}</p>
                    <p className="itemCount">Stock: {props.count}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct;



