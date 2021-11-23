// import { useState } from "react"
// import {currency} from "./App.js"
// 🚨🚨🚨 This does not work

function CurrencyChanger(props) {
    
    
    return (
        
            // if ({props.currency} = "usd") {
            //     <p className="itemPrice">$ {props.price}</p>
            // } else if ({props.currency} = "cad") {
            //     <p className="itemPrice">$ {props.price}*1.26</p>
            // } else {
            //     <p className="itemPrice">£ {props.price}*0.74</p>
            // }


            <p className="itemPrice">{props.currency}</p>

        )
    }
    
    export default CurrencyChanger;
    
    
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
    
    
    