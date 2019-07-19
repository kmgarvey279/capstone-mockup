import React from 'react';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <div>
      <h1>Game Title</h1>
      <hr/>
      <Link to="/game">Start Game</Link>
    </div>
  );
}

export default Title;