import React from 'react';
import Level from './Level';
import GameUI from './GameUI';

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
    </div>
  );
}

export default Game;