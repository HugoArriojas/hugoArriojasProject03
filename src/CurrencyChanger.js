import { useState } from "react"
// import {currency} from "./App.js"
// 🚨🚨🚨 This does not work

function CurrencyChanger(props) {
    //     usd: {
    //       exchange: 1,
    //       symbol: `$`
    //     },
    //     cad: {
    //       exchange: 1.26,
    //       symbol: `$`
    //     },
    //     gbp: {
    //       exchange: 0.74,
    //       symbol: `£`
    //     }
    


    return (


        <p className="itemPrice">{props.price}</p>

    )
}

export default CurrencyChanger;



