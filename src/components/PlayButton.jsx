import React from 'react';
import PropTypes from 'prop-types';

function PlayButton(props) {
  return(
    <div onClick={props.onPlayButton}>
      PLAY
    </div>
  );
}

PlayButton.propTypes = {
  onPlayButton: PropTypes.func
};

export default PlayButton;
