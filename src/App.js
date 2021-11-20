import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import ShowProduct from './ShowProduct';

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
        <h1>Reactive <span>Retail</span></h1>
        <div className="imageTriangle"></div>
      </header>

      <section className="sideNav">
        <h2>Sort by:</h2>
        <nav>
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
            <li>1+</li>
            <li>2+</li>
            <li>3+</li>
            <li>4+</li>
          </ul>
        </nav>

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
    </div>

  );
}

export default App;
