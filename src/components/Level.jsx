import React from 'react';
import Square from './Square';

var levelLayout = [
  {
    type: 'empty',
    id: 1,
    hasYou: true,
    hasEnemy: false
  },
  {
    type: 'empty',
    id: 2,
    hasYou: false,
    hasEnemy: false
  },
  {
    type: 'fire',
    id: 3,
    hasYou: false,
    hasEnemy: false
  },
  {
    type: 'empty',
    id: 4,
    hasYou: false,
    hasEnemy: true
  },
  {
    type: 'empty',
    id: 5,
    hasYou: false,
    hasEnemy: false
  },
  {
    type: 'empty',
    id: 6,
    hasYou: false,
    hasEnemy: false
  },
  {
    type: 'fire',
    id: 7,
    hasYou: false,
    hasEnemy: false
  },
  {
    type: 'empty',
    id: 8,
    hasYou: false,
    hasEnemy: true
  }
];

function Level() {
  return (
    <div id="level">
    <style jsx>{`
      div#level {
        columns: 4 auto;
        column-gap: 0px;
        width: 400px;
        height: 400px;
      }
      
      div#square {
        background-color: gray;
        height: 100px;
        width: 100px;
        display: inline-block;
        border: solid black 2px;
        vertical-align: top;
      }
      `}</style>
    {levelLayout.map((square, index) =>
      <div id="square">  
        <Square type={square.type}
        id={square.id}
        hasYou={square.hasYou}
        hasEnemy={square.hasEnemy}
        key={index}/>
      </div>
    )}
  </div>
  );
}

export default Level;