import { useState } from 'react';

function HoverText(props) {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      {/* Media queries made to have mouseover descriptions on larger screens */}
      <div className="itemImage"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
        >
        {/* Description show button appears on smaller screeens in order to accomodate mobule users */}
        <button className="descriptionButton"
        onClick={() => setVisibility(true)}>
          Description
        </button>
        {visibility && (
          <p className="itemDesc" 
          onClick={() => setVisibility(false)}
          >
            <span> Tap/Click to hide</span>
            {props.description}  
          </p>
        )}
        <img src={props.image} alt={props.title} />
      </div>
      {/* 🚨 What is a good alt caption for this so it's not just the title?? Potentially using the category?? */}
    </>
  );
}

export default HoverText;