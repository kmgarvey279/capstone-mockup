import React from 'react';
import PropTypes from 'prop-types';
import charImg from '../assets/images/charplaceholder.png';
import enemyImg from '../assets/images/enemyplaceholder.png';

function Square(props){
  if (props.hasYou) {
    return (
      <div>
      <style jsx>{`
        img#char{
          position: absolute;
          z-index: 1;
        }
        div#square{
          position: relative; 
          z-index: -1;
        }
        `}</style>
        <img id="char" src={charImg} width="100" height="100"/>
        <div id="square">{props.image}</div>
      </div>
    );
  } else if (props.hasEnemy) {
      return (
        <div>
        <style jsx>{`
          img#enemy{
            position: absolute;
            z-index: 1;
          }
          div#square{
            position: relative; 
            z-index: -1;
          }
          `}</style>
          <img id="enemy" src={enemyImg} width="100" height="100"/>
          <div id="square">{props.image}</div>
        </div>
      );
  } else {
    return (
      <div>
      <style jsx>{`
        img#square{
          position: absolute;
          z-index: 0;
        }
        `}</style>
        {props.image}
      </div>
    );
  }
}

Square.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  hasYou: PropTypes.bool.isRequired, 
  hasEnemy: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired
};

export default Square