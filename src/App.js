import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {
  const [time, setTime] = useState({ms:0});
  const [interv, setInterv] = useState();
  const [sec, setSec] = useState([new Date()]);

  var ch = 0;

  const upCheckTime = () => {
    var start = new Date();
    setSec([...sec, start]);
    console.log("check : " + ch);
    if(ch === 0){
        secup();
    }
  }

  const downCheckTime = () => {
    var start = new Date();
    setSec([...sec, start]);
    console.log("check : " + ch);
    if(ch === 0){
        secdown();
    }
  }

  const onUp = () => {
    if(ch === 1){
      clearInterval(interv);
      up();
      ch = ch - 1;
    }
  };

  const onDown = () => {
    if(ch === 1){
      clearInterval(interv);
      down();
      ch = ch - 1;
    }
  };

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

  const upStop = () => {
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
      console.log("stopch : " + ch);
      onUp();
    }
  };

  const downStop = () => {
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
      onDown();
    }
  };

  return (
    <div>
      <DisplayComponent time={time}/>
      <BtnComponent upStop={upStop} downStop={downStop} up={upCheckTime} down={downCheckTime}/>
    </div>

  );
}

export default App;
