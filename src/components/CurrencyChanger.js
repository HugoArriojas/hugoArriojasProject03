// //This is just a component that also works as a currency converter, but I found a more elegant solution so this goes unused 

// // Put this in show products
// {/* < CurrencyChanger
//     price={props.price}
//     currency={props.currency}
// /> */}


// import { useState, useEffect } from "react"
// // Done with the help of Joey Deol

// function CurrencyChanger(props) {

//     const [priceState, setPriceState] = useState(props)

//     useEffect(() => {
//         convertPrice(props.currency, props.price)

//     },[props])
    
//     const convertPrice = function(currency, price){
//         if (currency === "usd") {
//             setPriceState({
//                 price:price,
//                 currency:currency
//             })
//         } else if (currency === "cad") {
//             setPriceState({
//                 price:price*1.26,
//                 currency:currency
//             })
//         } else {
//             setPriceState({
//                 price:price*0.74,
//                 currency:currency
//             })
//         }
//     }
    
//     return (
//         <>
//             <p className="itemPrice">{props.price}</p>
//             <p className="itemPrice">{props.currency}</p>
//             {/* <p>{priceState.price}</p> */}
//         </>
//         )
//     }
    
//     export default CurrencyChanger;
    
    
//     //     usd: {
//     //       exchange: 1,
//     //       symbol: `$`
//     //     },
//     //     cad: {
//     //       exchange: 1.26,
//     //       symbol: `$`
//     //     },
//     //     gbp: {
//     //       exchange: 0.74,
//     //       symbol: `£`
//     //     }
    
    
    