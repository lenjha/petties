import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';

function PetList(props) {
  return (
    <div>
      {props.petList.map((pet, index) =>
        <Pet image={pet.image}
          name={pet.name}
          satiety={pet.satiety}
          happiness={pet.happiness}
          energy={pet.energy}
          health={pet.health}
          key={index}/>
      )}
    </div>
  );
}

PetList.propTypes={
  petList: PropTypes.arrayOf(PropTypes.object)
};

export default PetList;
