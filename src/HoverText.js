import { useState } from "react";


// This component renders the description text over the product images on hover
// Description also rendered on click of the description button
function HoverText(props) {
  // Sets state based on visibility
  const [visibility, setVisibility] = useState(false);
  
  // Making the images tabable for accessibility as there is no "description" button on larger screens 
  const divs = document.getElementsByClassName('itemImage');
  for (let i = 0; i < divs.length; i++){
      divs[i].setAttribute('tabindex', '0');
  }

  return (
    <>
      {/* Media queries made to have mouseover descriptions on larger screens, description buttons on smaller screens */}
      <div className="itemImage"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      onFocus={() => setVisibility(true)}
      onBlur={() => setVisibility(false)}
      // Allows description to be hidden on double click even on mouseover
      onClick={() => setVisibility(false)}
      >
        {visibility && (
          <p className="itemDesc" 
          onClick={() => setVisibility(false)}
          onBlur={() => setVisibility(false)}
          >
            <span> Mobile users: tap to hide</span>
            {props.description}  
          </p>
        )}
        {/* Description show button appears on smaller screeens in order to accomodate mobile users */}
        <button className="descriptionButton"
        onClick={() => setVisibility(true)}
        >
          Description
        </button>
        <img src={props.image} alt={props.title} />
      </div>
    </>
  );
}

export default HoverText;