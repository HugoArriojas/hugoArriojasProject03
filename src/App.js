import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import ShowProduct from './components/ShowProduct';
import SideNav from './components/SideNav';


import initials from "./assets/initials.png"
import usdFlag from "./assets/USD-flag.png"
import cadFlag from "./assets/CAD-flag.png"
import gbpFlag from "./assets/GBP-flag.png"


function App() {
  // using useState in order to hold the items from the Fake store API
  const [item, setItem] = useState([])
  // Checks if API response has been received
  const [loading, setLoading] = useState(false);
  // Holding selected category
  const [categoryInput, setCategoryInput] = useState("");
  // Holding current currency conversion
  const [currency, setCurrency] = useState("usd")

  useEffect(() => {
    // Calling the API using Axios
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${categoryInput}`,
      responseType: "json",
    })
      .then((response) => {
        // using useState in order to store the received product array
        setItem(response.data)
        // Once API call is received, change useState as "loaded"
        setLoading(true);
      })
    // We want API call to be made with every category change
  }, [categoryInput])


  return (
    <div className="App">

      <header>
        <h1>Reactive <span>Retail</span></h1>
        <div className="imageTriangle"></div>
      </header>

      <main>
        <SideNav
          currency = {currency}
            />
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
          </div> 
          {/* end of sidenav Wrapper */}
        </section>

        <section className="productContainers">
          {/* Ternary conditional checks if the API has received a response 
          This conditional done with the help of Esther Edell*/}
          {loading ? (
            item.map((product) => {
              let currentPrice = 0;
              if (currency === "usd") {
                currentPrice = `$${(product.price).toFixed(2)} (USD)`
              } else if (currency === "cad") {
                currentPrice = `$${(product.price * 1.26).toFixed(2)} (CAD)`
              } else {
                currentPrice = `£${(product.price * 0.74).toFixed(2)} (GBP)`
              }

              return (
                <ShowProduct
                  key={product.id} // passing through as key
                  image={product.image}
                  title={product.title}
                  price={currentPrice}
                  rating={product.rating.rate}
                  count={product.rating.count}
                  description={product.description}
                  currency={currency}
                />
              )
            })
          )
            : ( // if loading state is not true (meaning loaded) then placeholder text is rendered
              <div className="loading">
                <h2 className="loadingText">Please wait for API Response</h2>
                {/* Empty divs below are part of the CSS loading effect */}
                <div className="loadRipple">
                  <div></div>
                  <div></div>
                </div>
              </div>
            )
          }
        </section>
      </main>

      <footer>
        <h1>Reactive <span>Retail</span></h1>
        <div className="imageTriangle"></div>
      </footer>

      <section className="creditSocials">
        <p>
          Made at <a href="https://junocollege.com/">Juno College</a>
        </p>
        <div className="socials">

          <a href="http://www.hugoa.dev">
            <img src={initials} alt="Website creator's initials, HA" className="initials" />
          </a>

          <a href="https://github.com/HugoArriojas/hugoArriojasProject03">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/hugo-arriojas-53613120a">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      {/* </App> */}
    </div>

  );
}

export default App;
