import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {
  const [time, setTime] = useState({ms:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const onUp = () => {
    up();
    setStatus(0);
    setInterv(setInterval(up, 100));
  };

  const onDown = () => {
    down();
    setStatus(0);
    setInterv(setInterval(down, 100));
  }

  var updatedMs = time.ms;

  const up = () => {
    updatedMs++;
    return setTime({ms:updatedMs});
  };

  const down = () => {
    updatedMs--;
    return setTime({ms:updatedMs});
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(1);
  };

  const upResume = () => onUp();
  const downResume = () => onDown();

  return (
    <div>
      <DisplayComponent time={time}/>
      <BtnComponent status={status} upResume={upResume} downResume={downResume} stop={stop} up={onUp} down={onDown}/>
    </div>

  );
}

export default App;
