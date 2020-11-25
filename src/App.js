import React from 'react'
import './assets/css/App.css';
import PortfolioGrid from './components/PortfolioGrid'
import data from './data/portfoliodb.json'

function App() {
  return (
    <React.Fragment>
      <PortfolioGrid data={data}/>
    </React.Fragment>
  );
}

export default App;
