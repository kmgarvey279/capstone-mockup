import React from 'react';
import PropTypes from 'prop-types';
import profile from '../assets/images/profileplaceholder.png';
import weapon from '../assets/images/FlareGun.png';
import armor from '../assets/images/jumpsuit.jpg';

function GameUI(props) {
  return (
    <div id="ui">
      <style jsx>{`
        div#ui {
          border: 3px solid darkblue;
          background-color: lightblue;
          columns: 3;
          column-gap:50px;
          height: 200px;
          width: 500px;
          text-align: center;
        }
        div#stats {
          vertical-align: top;
          display: inline-block;
          width:100px;
        }
        `}</style>
      <div id="stats">
        <h3>Health: {props.playerHealth}/100</h3>
        <img id="profile" src={profile} width="100px" height="100px" />
      </div>
      <div id="stats">  
        <h3>Weapon: {props.playerWeapon}</h3>
        <img id="weapon" src={weapon} width="100px" height="100px"/>
      </div>
      <div id="stats">
        <h3>Armor: {props.playerArmor}</h3>
        <img id="armor" src={armor} width="100px" height="100px"/>
      </div>
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