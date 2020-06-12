import React from 'react';
import './BtnComponent.css'

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)?
        <div>
          <button
          onMouseDown={props.up, props.upResume} onMouseUp={props.stop}>+</button>
          <button className="minus"
          onMouseDown={props.down, props.downResume} onMouseUp={props.stop}>-</button>
        </div> : ""
      }

      {(props.status === 1)?
        <div>
          <button
          onMouseDown={props.up, props.upResume} onMouseUp={props.stop}>+</button>
          <button className="minus"
          onMouseDown={props.down, props.downResume} onMouseUp={props.stop}>-</button>
        </div> : ""
      }

    </div>
  );
}

export default BtnComponent;
