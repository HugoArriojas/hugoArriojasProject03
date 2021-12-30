import './App.css';
import { useState} from 'react';
import SideNav from './components/SideNav';
import HeaderFooter from './components/HeaderFooter';
import ProductContainers from './components/ProductContainers';


import initials from "./assets/initials.png"

function App() {
  // Holding selected category
  const [categoryInput, setCategoryInput] = useState("");
  // Holding current currency conversion
  const [currency, setCurrency] = useState("usd")

  const handleCategory = (cat) => {
    setCategoryInput(cat);
  }

  const handleCurrency = (cur) => {
    setCurrency(cur);
  }

  return (
    <div className="App">

      <HeaderFooter/>

      <main>
        <SideNav
          handleCurrency = {handleCurrency}
          handleCategory = {handleCategory}
        />

        <ProductContainers
          categoryInput = {categoryInput}
          currency = {currency}
        />
      </main>

      <HeaderFooter/>

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
