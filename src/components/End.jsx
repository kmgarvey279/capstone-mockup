import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function End(props){
  const endLinks = 
  <div>
    <h1><Link to="/game">Replay</Link></h1>
    <h1><Link to="/">Return to Title</Link></h1>
  </div>;

  if (props.playerAlive === true) {
    return (
      <div>
        <style jsx>{`
        `}</style>
        <h1>You Win!</h1>
        <hr/>
        {endLinks}
      </div>
    );
  } else {
    return (
      <div>
        <style jsx>{`
        `}</style>
        <h1>Game Over</h1>
        <hr/>
        <h1><Link to="/game">Retry Level</Link></h1>
        {endLinks}
      </div>
    );
  }
}

End.propTypes = {
  playerAlive: PropTypes.bool.isRequired,
};

export default End;