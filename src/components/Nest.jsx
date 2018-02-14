import React from 'react';
import Display from './Display';
import Controls from './Controls';

function Nest() {
  return(
    <div>
      <Display />
      <Controls />
    </div>
  );
}

export default Nest;
