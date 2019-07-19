import React from 'react';
import PropTypes from 'prop-types';

function GameUI(props) {
  return (
    <div>
      <h3>UI Placeholder</h3>
    </div>
  );
}

GameUI.propTypes = {
  playerAlive: PropTypes.bool.isRequired,
  playerHealth: PropTypes.number.isRequired,
  playerWeapon: PropTypes.string.isRequired,
  playerArmor: PropTypes.string.isRequired
};

export default GameUI;