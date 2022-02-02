// Used when result containers are clicked to show extra details
import "../stylesheets/ExtraDetails.css"

function ExtraDetails(props) {

    const addedToCart = () => {
        props.handleAddToCart()
        props.handleClose()
    }

    return (
        <>
            {/* Blocker in case users don't want to x out of the window */}
            <div className="blocker" onClick={props.handleClose}></div>

            <div className="expandedItem">
                <button className="closeButton" onClick={props.handleClose} aria-label="closePopupWindow">X</button>
               
                <div className="expandedImgInfo">
                    <div className="expandedImage">
                        <img src={props.image}
                            alt={props.title}
                        />
                    </div> {/* /expandedImage */}

                    <div className="expandedInfo">
                        <div className="itemInfoWrapper expandedSide">
                                <p className="itemPrice expandedBubble">{props.price}</p>
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
                    </div> {/* /itemInfoWrapper */}
                </div> {/* /expandedInfo */}
            </div> {/* /expandedItem */}
        </>
    )
}

export default ExtraDetails