import './App.css';
import { useState} from 'react';
import SideNav from './components/SideNav';
import HeaderFooter from './components/HeaderFooter';
import ProductContainers from './components/ProductContainers';
import CreditSocials from './components/CreditSocials';

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
      <CreditSocials/>

      {/* </App> */}
    </div>

  );
}

export default App;
