import react from 'react';
import Square from './Square';

var levelLayout = [
  {
    type: 'empty';
    id: 1,
    hasYou: true
    hasEnemy: false
  },
  {
    type: 'empty';
    id: 2,
    hasYou: false,
    hasEnemy: false
  },
  {
    type: 'fire';
    id: 3,
    hasYou: false,
    hasEnemy: false
  },
  {
    type: 'empty';
    id: 4,
    hasYou: false,
    hasEnemy: true
  }
];

function Level() {
  return (
    <div>
    {levelLayout.map((square, index) =>
      <Square type:{square.type}
      id:{square.id}
      hasYou:{square.hasYou}
      hasEnemy:{square.hasEnemy}
      key={index}/>
    )}
  </div>
  );
}

export default Level;