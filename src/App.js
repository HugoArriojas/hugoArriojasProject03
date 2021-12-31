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

  // Handle category selection from sideNav component
  const handleCategory = (cat) => {
    setCategoryInput(cat);
  }
  
  // Handle currency selection from sideNav component
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
          currency = {currency}
          categoryInput = {categoryInput}
        />
      </main>
      <HeaderFooter/>
      <CreditSocials/>
      
      {/* </App> */}
    </div>

  );
}

export default App;
