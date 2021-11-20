// Props here represent the props that we passed in App.js
//ie. key, image, alt(?), title, price, rating, description, count
// For the hover function
import {useState} from "react";
import HoverText from "./HoverText";

function ShowProduct(props) {

    return (
        <div key={props.key} class="itemContainer">
            < HoverText
                description = {props.description}
                image = {props.image}
                title = {props.title}
            />
            <div className="itemText">
                <h3 class="itemTitle">{props.title}</h3>
                <div className="itemInfo">
                    <p class="itemPrice">{props.price}</p>
                    {/*🚨 Will have to create ::before pseudoclass to represent current currency*/}
                    <p class="itemRating">Rating: {props.rating}</p>
                    <p class="itemCount">Stock: {props.count}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowProduct;



