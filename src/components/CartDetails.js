// Works like "extraDetails" but for the saved Favourites
import "../stylesheets/ExtraDetails.css"

function CartDetails(props) {

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
                    <div className="itemInfoWrapper">
                        <div className="expandedBubble">
                            <p className="itemPrice">{props.price}</p>
                        </div>
                        <p className="itemRating">{props.rating}</p>
                    </div>
                </div>
            </div>
            
            <div className="expandedInfo expandedDesc">
                <div className="itemInfoWrapper">
                    <h3 className="expandedTitle">{props.title}</h3>
                    <p className="itemDesc">{props.desc}</p>
                </div> {/* /itemInfoWrapper */}
            </div> {/* /expandedInfo */}
        </div> {/* /expandedItem */}
    </>
    )
}

export default CartDetails