import { useState } from 'react';

function HoverText(props) {
  const [visibility, setVisibility] = useState(false);

  return (
      <>
      <div className="itemImage"
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}>
        {visibility && (
            <p class="itemDesc">{props.description}</p>
        )}
        <img src={props.image} alt={props.title} />
        </div>
      {/* 🚨 What is a good alt caption for this so it's not just the title?? Potentially using the category?? */}
    </>
  );
}

export default HoverText;