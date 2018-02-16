import React from 'react';
import FeedButton from './FeedButton';
import PlayButton from './PlayButton';
import NapButton from './NapButton';
import PropTypes from 'prop-types';

function Controls(props) {
  return(
    <div>
      <style jsx>{`
        display: flex;
        background: pink;
        flex-direction: columns;
        justify-content: space-around;
        height: 40px;
        align-items: center;
      `}</style>
      <FeedButton onFeedButton={props.onFeedButtonPass}/>
      <PlayButton onPlayButton={props.onPlayButtonPass}/>
      <NapButton onNapButton={props.onNapButtonPass}/>
    </div>
  );
}

Controls.propTypes = {
  onFeedButtonPass: PropTypes.func,
  onPlayButtonPass: PropTypes.func,
  onNapButtonPass: PropTypes.func
};

export default Controls;
