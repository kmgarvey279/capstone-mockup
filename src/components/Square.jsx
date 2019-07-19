import React from 'react';
import PropTypes from 'prop-types';

function Square(props){
  return (
    <div>
    <style jsx>{`
      `}</style>
    </div>
  );
}

Square.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  hasYou: PropTypes.bool.isRequired, 
  hasEnemy: PropTypes.bool.isRequired
};

export default Square