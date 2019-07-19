import React from 'react';
import Level from './Level';
import GameUI from './GameUI';
import { Link } from 'react-router-dom';

var playerStats = {
  playerAlive: true,
  playerHealth: 70,
  playerWeapon: 'flare',
  playerArmor: 'jumpsuit'
};

function Game() {
  return (
    <div>
      <Level/>
      <hr/>
      <GameUI playerAlive={playerStats.playerAlive}
      playerHealth={playerStats.playerHealth}
      playerWeapon={playerStats.playerWeapon}
      playerArmor={playerStats.playerArmor}/>
      <h1><Link to="/end" playerAlive={{ playerAlive: true}}>Link</Link></h1>
      <h1><Link to="/end">End</Link></h1>
    </div>
  );
}

export default Game;