import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import ShowProduct from './ShowProduct';
import HeaderFooter from './HeaderFooter';

function App() {

  // using useState in order to hold the items from the Fake store API
  const [item, setItem] = useState([])
  // Holding selected category
  const [categoryInput, setCategoryInput] = useState("");

  // setting category input to null so that all items appear on page load
  // const categoryInput = "category/electronics";

  const categoryChange = (select) => {
    setCategoryInput(select);
  }


  useEffect(() => {
    // Calling the API using Axios
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${categoryInput}`,
      responseType: "json",
    })

      .then((response) => {
        console.log(response.data)
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
              <h3>Categories</h3>
              <ul>
                {/* How do I revert back to none?? */}
                <li><button onClick={() => categoryChange("")}>All</button></li>
                <li><button onClick={() => categoryChange("category/electronics")}>Electronics</button></li>
                <li><button onClick={() => categoryChange("category/jewelery")}>Jewelry</button></li>
                <li><button onClick={() => categoryChange("category/men's%20clothing")}>Men's clothing</button></li>
                <li><button onClick={() => categoryChange("category/women's%20clothing")}>Women's clothing</button></li>
              </ul>
              <h3>Rating</h3>
              <ul>
                <li><button>★☆☆☆☆+</button></li>
                <li><button>★★☆☆☆+</button></li>
                <li><button>★★★☆☆+</button></li>
                <li><button>★★★★☆+</button></li>
              </ul>
              <h3>Currency</h3>
              <ul>
                <li><button id="usd">USD</button></li>
                <li><button id="cad">CAD</button></li>
                <li><button id="gbp">GBP</button></li>
              </ul>
            </nav>
          </div>

        </section>

        <section className="productContainers">
          {
            item.map((product) => {
              // console.log(product)
              return (
                <ShowProduct
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating.rate}
                  count={product.rating.count}
                  description={product.description}
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
