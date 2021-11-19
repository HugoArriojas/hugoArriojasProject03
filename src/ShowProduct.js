// Props here represent the props that we passed in App.js
//ie. key, image, alt(?), title, price, rating, description, count

function ShowProduct(props) {
    return (
        <div key={props.key} class="itemContainer">
            <div className="itemImage">
                <img src={props.image} alt={props.title} />
                {/* 🚨 What is a good alt caption for this so it's not just the title?? Potentially using the category?? */}
                <p class="itemDesc">{props.description}</p>
            </div>
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



