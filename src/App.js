import React from 'react'
import './assets/css/App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import ChipsArray from './components/Skills'
import Portfolio from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <AboutMe />
      <ChipsArray />
      <Portfolio />
      <div className='text-sm text-center text-red-500'>
        <p>Built by <a href='https://github.com/s2hon'className='font-bold text-red-800 hover:text-pink-500'>Staci Shon</a></p>
      </div>
      <NavBar />
    </React.Fragment>
  );
}

export default App;
