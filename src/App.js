import React from 'react';
import './App.css';
import catGif from './catGif.gif';
import catPng from './catPng.png';
import catSvg from './catSvg.svg';
import catJpg from './catJpg.jpg';

function App(props) {
  return (
    <div>
    <h1 className="App-Title">Hello, world!</h1>
    <img src={catJpg} alt="cat"/>
    <img src={catPng} alt="cat"/>
    <img src={catGif} alt="cat"/>
    <img src={catSvg} alt="cat"/>
    </div>
  );
}

export default App;