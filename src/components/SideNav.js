
import { useState } from "react";
import usdFlag from "../assets/USD-flag.png"
import cadFlag from "../assets/CAD-flag.png"
import gbpFlag from "../assets/GBP-flag.png"


function SideNav(props) {
    
      // Holding selected category
      const [categoryInput, setCategoryInput] = useState("");
      // Holding current currency conversion
      const [currency, setCurrency] = useState("usd")

  return (
      <section className="sideNav">
          <div className="navWrapper">
            <nav>
              <h2>Sort by:</h2>

              {/* setCategoryInput passes on the values and makes a new API call */}
              <h3>Categories:</h3>
              <ul>
                <li>
                  <button className="btn-slide" onClick={() => setCategoryInput("")}>All</button>
                </li>
                <li>
                  <button className="btn-slide" onClick={() => setCategoryInput("category/electronics")}>Electronics</button>
                </li>
                <li>
                  <button className="btn-slide" onClick={() => setCategoryInput("category/jewelery")}>Jewelry</button>
                </li>
                <li>
                  <button className="btn-slide" onClick={() => setCategoryInput("category/men's%20clothing")}>Men's clothing</button>
                </li>
                <li>
                  <button className="btn-slide" onClick={() => setCategoryInput("category/women's%20clothing")}>Women's clothing</button>
                </li>
              </ul>

              {/* Set Currency changes the current currency state */}
              <h3>Currency:</h3>
              <ul className="currencies">
                <li>
                  <img src={usdFlag} alt="Flag of the USA"
                  aria-label="change currency to USD"
                    onClick={() => setCurrency("usd")} />
                </li>
                <li>
                  <img src={cadFlag} alt="Flag of Canada"
                  aria-label="change currency to CAD"
                    onClick={() => setCurrency("cad")} />
                </li>
                <li>
                  <img src={gbpFlag} alt="Flag of Great Britain"
                  aria-label="change currency to GBP"
                    onClick={() => setCurrency("gbp")} />
                </li>
              </ul>
            </nav>
            <h3 className="descriptionExplain">Hover over products for desciptions</h3>
          </div> {/* end of sidenav Wrapper */}
        </section>
  );
}

export default SideNav;