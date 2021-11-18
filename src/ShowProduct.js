// Props here represent the props that we passed in App.js
    //ie. key, image, alt(?), title, price, rating, description, count

function ShowProduct(props){
    return(
        <div key={props.key}>
            <img src={props.image} alt={props.title} />
            {/* 🚨 What is a good alt caption for this so it's not just the title?? Potentially using the category?? */}
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            {/*🚨 Will have to create ::before pseudoclass to represent current currency*/}
            <p>{props.rating}</p>
            <p>{props.count}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default ShowProduct;



