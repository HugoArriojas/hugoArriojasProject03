import './stylesheets/App.css';
import { useState } from 'react';
import ShopCart from './components/ShopCart';
import SideNav from './components/SideNav';
import HeaderFooter from './components/HeaderFooter';
import ProductSection from './components/ProductSection';
import CreditSocials from './components/CreditSocials';


function App() {
  // Holding selected category
  const [categoryInput, setCategoryInput] = useState("");
  // Holding current currency conversion
  const [currency, setCurrency] = useState("usd")
  //  Holding the loading state in case there is also a category change

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
      <HeaderFooter />
      <ShopCart
        currency={currency}      
        />

      <main>
        <SideNav
          handleCurrency={handleCurrency}
          handleCategory={handleCategory}
          />
        <ProductSection
          currency={currency}      
          categoryInput={categoryInput}
        />
      </main>
      <HeaderFooter />
      <CreditSocials />

      {/* </App> */}
    </div>

  );
}

export default App;
