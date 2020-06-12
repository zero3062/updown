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
    setTimeout(function() {
      setInterv(setInterval(up, 100));
    }, 2000);
  };

  const onDown = () => {
    down();
    setStatus(0);
    setTimeout(function() {
      setInterv(setInterval(down, 100));
    }, 2000);
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

  return (
    <div>
      <DisplayComponent time={time}/>
      <BtnComponent status={status}  stop={stop} up={onUp} down={onDown}/>
    </div>

  );
}

export default App;
