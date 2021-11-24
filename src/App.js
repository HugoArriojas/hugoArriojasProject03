import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import ShowProduct from './ShowProduct';
import HeaderFooter from './HeaderFooter';

import usdFlag from "./assets/USD-flag.png"
import cadFlag from "./assets/CAD-flag.png"
import gbpFlag from "./assets/GBP-flag.png"


function App() {
  
  // using useState in order to hold the items from the Fake store API
  const [item, setItem] = useState([])
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
      })

  }, [categoryInput])
  // We want API call to be made once and only on page load, therefore we make an empty dependency array at the end of useEffect


  return (
    <div className="App">


      <header>
        <HeaderFooter />
      </header>
      <main>
        <section className="sideNav">
          <div className="navWrapper">
            <nav>
              <h2>Sort by:</h2>
              <h3>Categories:</h3>
              <ul>
                <li><button onClick = {() => setCategoryInput("")}>All</button></li>
                <li><button onClick = {() => setCategoryInput("category/electronics")}>Electronics</button></li>
                <li><button onClick = {() => setCategoryInput("category/jewelery")}>Jewelry</button></li>
                <li><button onClick = {() => setCategoryInput("category/men's%20clothing")}>Men's clothing</button></li>
                <li><button onClick = {() => setCategoryInput("category/women's%20clothing")}>Women's clothing</button></li>
              </ul>
              {/* <h3>Rating:</h3>
              <ul>
                <li><button>★☆☆☆☆+</button></li>
                <li><button>★★☆☆☆+</button></li>
                <li><button>★★★☆☆+</button></li>
                <li><button>★★★★☆+</button></li>
              </ul> */}
              <h3>Currency:</h3>
              <ul className="currencies">
                <li>
                  <img src={usdFlag} alt="Flag of the USA" 
                  onClick = {() => setCurrency("usd")}/>
                </li>
                <li>
                  <img src={cadFlag} alt="Flag of Canada" 
                  onClick = {() => setCurrency("cad")}/>
                </li>
                <li>
                  <img src={gbpFlag} alt="Flag of Great Britain" 
                  onClick = {() => setCurrency("gbp")}/>
                </li>
              </ul>
            </nav>
        <h3 className="descriptionExplain">Hover over products for desciptions</h3>
          {/* end of navWrapper */}
          </div>

        </section>

        <section className="productContainers">
          {
            item.map((product) => {
              let currentPrice = 0;
              if (currency === "usd") {
                currentPrice = product.price
              } else if (currency === "cad") {
              currentPrice = product.price*1.26
            } else {
              currentPrice = product.price*0.74
            }              


              return (
                <ShowProduct
                  anything={product.id} // passing through as key (transform evenly)
                  image={product.image}
                  title={product.title}
                  price={currentPrice}
                  rating={product.rating.rate}
                  count={product.rating.count}
                  description={product.description}
                  currency = {currency}
                />
              )
            })
          }
        </section>
      </main>
      <footer>
        <HeaderFooter />
      </footer>


      {/* </App> */}
    </div>

  );
}

export default App;
