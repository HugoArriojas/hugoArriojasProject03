// Component to render the results on the page, holds ShowProduct
import { useState, useEffect } from 'react';
import axios from "axios";
import ProductContainers from "./ProductContainers";
import "../stylesheets/ProductSection.css"

const ProductSection = (props) => {
  // using useState in order to hold the items from the Fake store API
  const [item, setItem] = useState([])
  // Checks if API response has been received
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Set to false every time that an API call is made
    setLoading(false)
    // Calling the API using Axios
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${props.categoryInput}`,
      responseType: "json",
    })
      .then((response) => {
        // using useState in order to store the received product array
        setItem(response.data)
        // Once API call is received, change useState as "loaded"
        setLoading(true);
      })
    // We want API call to be made with every category change
  }, [props.categoryInput])

  return (
    <section className="products">
      <ul className="productsList">
        {/* Ternary conditional checks if the API has received a response */}
        {loading ? (
          item.map((product) => {
            let currentPrice = 0;
            if (props.currency === "usd") {
              currentPrice = `$${(product.price).toFixed(2)} (USD)`
            } else if (props.currency === "cad") {
              currentPrice = `$${(product.price * 1.26).toFixed(2)} (CAD)`
            } else {
              currentPrice = `£${(product.price * 0.74).toFixed(2)} (GBP)`
            }

            return (
              <>
              <ProductContainers
                key={product.id} // passing through as key
                image={product.image}
                title={product.title}
                price={currentPrice}
                rating={product.rating.rate}
                count={product.rating.count}
                description={product.description}
                currency={props.currency}
                />
                </>
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
      </ul>
    </section>
  )
}

export default ProductSection;