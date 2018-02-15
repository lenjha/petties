import React from 'react';
import PropTypes from 'prop-types';

function FeedButton(props) {

  return(
    <div onClick={props.onFeedButton}>
      FEED
    </div>
  );
}

FeedButton.propTypes = {
  onFeedButton: PropTypes.func
};

export default FeedButton;
