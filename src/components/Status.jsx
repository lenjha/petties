import React from 'react';
import PropTypes from 'prop-types';

function Status(props) {
  return(
    <div>
      <style jsx>{`
        display: flex;
        flex-direction: row;
        width: 100%;
      `}</style>
      <div className='status'>
        <p>SATIETY: {props.pet.satiety}</p>
        <p>HAPPINESS: {props.pet.happiness}</p>
        <p>ENERGY: {props.pet.energy}</p>
        <p>HEALTH: {props.pet.health}</p>
      </div>
    </div>
  );
}

Status.propType={
  satiety: PropTypes.number.isRequired,
  happiness: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired
};

export default Status;
