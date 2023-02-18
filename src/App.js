import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import card from "./images/card.png";
import Card from './components/Card/Card';

import './App.css';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='carousel__content'>
      <Carousel/>
      <div className="card__content">
          <Card/>
          <Card/>
          <Card/>
      </div>
      </div>
    </div>
  );
}

export default App;
