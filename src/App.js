import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {
  const [time, setTime] = useState({ms:0});
  const [interv, setInterv] = useState();

  const onUp = () => {
      up();
      secup();
  };

  const onDown = () => {
    down();
    secdown();
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

  const secup = () => {
    setTimeout(function() {
      setInterv(setInterval(up, 100));
    }, 2000);
  }


  const secdown = () => {
    setTimeout(function() {
      setInterv(setInterval(down, 100));
    }, 2000);
  }

  const stop = () => {
    clearInterval(interv);
  };

  return (
    <div>
      <DisplayComponent time={time}/>
      <BtnComponent stop={stop} up={onUp} down={onDown}/>
    </div>

  );
}

export default App;
