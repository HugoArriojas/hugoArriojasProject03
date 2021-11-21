// Props here represent the props that we passed in App.js
//ie. key, image, alt(?), title, price, rating, description, count
// For the hover function
import HoverText from "./HoverText";

function ShowProduct(props) {

    return (
        <div key={props.key} className="itemContainer">
            < HoverText
                description = {props.description}
                image = {props.image}
                title = {props.title}
            />
            <div className="itemText">
                <h3 className="itemTitle">{props.title}</h3>
                <div className="itemInfo">
                    <p className="itemPrice">{props.price}</p>
                    {/*🚨 Will have to create ::before pseudoclass to represent current currency*/}
                    <p className="itemRating">Rating: {props.rating}</p>
                    <p className="itemCount">Stock: {props.count}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct;



