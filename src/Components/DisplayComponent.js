import React from 'react';

function DisplayComponent(props) {
  return (
    <div>
       <span>{(props.time.ms)}</span>
    </div>
  );
}

export default DisplayComponent;
