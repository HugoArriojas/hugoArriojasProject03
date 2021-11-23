import { useState } from "react";

function HoverText(props) {
  const [visibility, setVisibility] = useState(false);
  const divs = document.getElementsByClassName('itemImage');
  for (let i = 0; i < divs.length; i++){
      divs[i].setAttribute('tabindex', '0');
  }

  return (
    <>
      {/* Media queries made to have mouseover descriptions on larger screens */}
      <div className="itemImage"
      onMouseEnter={() => setVisibility(true)}
      onFocus={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      onClick={() => setVisibility(false)}
      
      >
        {visibility && (
          <p className="itemDesc" 
          onMouseLeave={() => setVisibility(false)}
          onClick={() => setVisibility(false)}
          >
            <span> Tap/Click to hide</span>
            {props.description}  
          </p>
        )}
        {/* Description show button appears on smaller screeens in order to accomodate mobule users */}
        <button className="descriptionButton"
        onClick={() => setVisibility(true)}>
          Description
        </button>
        <img src={props.image} alt={props.title} />
      </div>
      {/* 🚨 What is a good alt caption for this so it's not just the title?? Potentially using the category?? */}
    </>
  );
}

export default HoverText;