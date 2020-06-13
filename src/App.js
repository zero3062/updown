import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {
  const [time, setTime] = useState({ms:0});
  const [interv, setInterv] = useState();
  const [sec, setSec] = useState([new Date()]);

  let ch = 0;

  const checkTime = () => {
    var start = new Date();
    setSec([...sec, start]);
    console.log("check : " + ch);
    if(ch === 0){
      if(ch === 1) {
        return;
      }else {
        secup();
      }
    }
  }

  const onUp = () => {
    if(ch === 1){
      setTimeout(function(){
        clearInterval(interv);
      }, 2100)
      up();
      ch = ch - 1;
    }
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
    var now = new Date();
    console.log("now : " + now);

    var writeDay = new Date(sec[sec.length -1]);
    console.log("writeDay : " + writeDay);

    var minus;
    var time = '';
    if(now.getSeconds() >= writeDay.getSeconds()){
      minus = now.getSeconds() - writeDay.getSeconds();
      time += minus;
    }

    console.log("time : " + time);
    if(time < 2) {
      ch = ch + 1;
      onUp();
    }
  };

  return (
    <div>
      <DisplayComponent time={time}/>
      <BtnComponent stop={stop} up={checkTime} down={onDown}/>
    </div>

  );
}

export default App;
