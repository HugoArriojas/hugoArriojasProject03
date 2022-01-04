import "../stylesheets/ExtraDetails.css"

function ExtraDetails(props) {

    const addedToCart = () => {
        props.handleAddToCart()
        props.handleClose()
    }

    return (
        <>
            <div className="blocker" onClick={props.handleClose}></div>
            <div className="expandedItem">
                <button className="closeButton" onClick={props.handleClose} aria-label="closePopupWindow">X</button>
                <div className="expandedImgInfo">
                    <div className="expandedImage">
                        <img src={props.image}
                            alt={props.title}
                        />
                    </div>
                    <div className="expandedInfo">
                        <div className="itemInfoWrapper">
                            <div className="expandedBubble">
                                <p className="itemPrice">{props.price}</p>
                            </div>
                            <p className="itemRating">{props.rating} ★</p>
                            <p className="itemCount">({props.count} ratings)</p>
                            <div 
                                className="addToCart expandedBubble" 
                                onClick={addedToCart}
                            >
                                <p className="itemPrice">Add To Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="expandedInfo expandedDesc">
                    <div className="itemInfoWrapper">
                        <h3 className="expandedTitle">{props.title}</h3>
                        <p className="itemDesc">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExtraDetails