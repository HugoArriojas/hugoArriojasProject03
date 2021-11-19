import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import ShowProduct from './ShowProduct';

function App() {

  // using useState in order to hold the items from the Fake store API
  const [item, setItem] = useState([])


  
  useEffect(() => {
    // Calling the API using Axios
    axios ({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      responseType: "json",
      // params: {
        //   category: null,
        // }
      })
      .then((response) => {
        console.log(response.data)
        // using useState in order to store the received product array
        setItem(response.data)
      })
      
    }, [])
    
    // We want API call to be made once and only on page load, therefore we make an empty dependency array at the end of useEffect


  return (
    <div className="App">
      <header>

      <h1>Reactive <span>Retail</span></h1>
      <div className="imageTriangle"></div>
      </header>
      <div className="productContainers">
      {
        item.map((product) => {
          console.log(product)
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
        </div>
    </div>

  );
}

export default App;
