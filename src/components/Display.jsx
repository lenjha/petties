import React from 'react';
import Status from './Status';
import Pet from './Pet';
import PropTypes from 'prop-types';

function Display(props) {
  return(
    <div>
      <Status pet={props.pet}/>
      <Pet pet={props.pet}/>
    </div>
  );
}

Display.propTypes={
  pet: PropTypes.object
};

export default Display;
