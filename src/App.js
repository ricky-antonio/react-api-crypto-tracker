//   https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per+page=100&page=1&sparkline=false

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per+page=100&page=1&sparkline=false";

  const [coins, setCoins] = useState([]) ;

  useEffect(() => {
    axios.get(apiUrl)
    .then(res => {
      setCoins(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form >
          <input type="text" className="coin-input" placeholder='Search'/>
        </form>
      </div>
      
    </div>
  );
}

export default App;

