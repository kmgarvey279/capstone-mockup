import React from 'react';
import PropTypes from 'prop-types';

function Square(props){
  return (
    <div>
    <style jsx>{`
      `}</style>
      {props.image}
    </div>
  );
}

Square.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  hasYou: PropTypes.bool.isRequired, 
  hasEnemy: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired
};

export default Square