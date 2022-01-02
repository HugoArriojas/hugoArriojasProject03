function ExtraDetails(props) {
    return (
        <div className="expandedItem">
            <button className="closeButton" onClick={props.handleClose} aria-label="closePopupWindow">X</button>
            <div className="expandedImage">
                <img src={props.image}
                    alt={props.title}
                />
            </div>
            <div className="expandedInfo">
                <div className="itemInfoWrapper">
                    <h3 className="expandedTitle">{props.title}</h3>
                    <p className="itemDesc">{props.description}</p>
                    <div className="itemInfo">
                        <div className="priceBubble">
                            <p className="itemPrice">{props.price}</p>
                        </div>
                        <p className="itemRating">{props.rating} ★</p>
                        <p className="itemCount">({props.count} ratings)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraDetails