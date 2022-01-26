import "./styles/tailwind.css";
import CoinMarketPrice from './component/coinmarket/display_coininfo';
import React from 'react';

function App() {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  return (
    <div className="App">
      <CoinMarketPrice />
    </div>
  );
}

export default App;
