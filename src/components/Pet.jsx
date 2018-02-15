import React from 'react';
import PropTypes from 'prop-types';

function Pet(props) {
  return(
    <div>
      <style jsx>{`
        background: honeydew;
      `}</style>


      <img src={props.pet.image} />
      <h2>{props.pet.name}</h2>
    </div>
  );
}

Pet.propType={
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  satiety: PropTypes.number.isRequired,
  happiness: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired
};

export default Pet;
