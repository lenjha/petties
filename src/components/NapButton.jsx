import React from 'react';
import PropTypes from 'prop-types';

function NapButton(props) {
  return(
    <div onClick={props.onNapButton}>
      NAP
    </div>
  );
}

NapButton.PropTypes = {
  onNapButton: PropTypes.func
};

export default NapButton;
