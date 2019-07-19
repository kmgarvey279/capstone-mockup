import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/images/placeholderbackground.gif';

function Title() {
  return (
    <div>
    <style jsx>{`
      div {
        text-align: center;
        background-color: black;
        color: white;
        length: 100%;
        width: 100%;
        top:0;
        left:0; 
      }
      img#background{
        position: absolute;
        top: 0;
        left: 0;
        z-index:0;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      h1 {
        position: relative;
        z-index: 1;
        margin-top: 100px;
      }
      `}</style>
      <img id="background" src={background}/>
      <h1>Game Title</h1>
      <hr/>
      <h1><Link to="/game">Start Game</Link></h1>
    </div>
  );
}

export default Title;