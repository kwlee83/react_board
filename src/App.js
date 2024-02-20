import './App.css';

import React, { useState } from 'react';

function App() {

  //let name = 'kwleeCoding';

  //let [name, setName] = useState('kwleeCoding');

  const [num, setNum] = useState(0);

  const [numList, setNumList] = useState([]);

  //setTimeout(() => {setNum(num=num+1)}, 1000);
 
  //<div style={{color : "red"}}>{num}</div>

  // <header className="App-header">
       
  // <div className="number">{num}</div>

  // </header>

  function numRecording() {
    setNumList([...numList, num]);

    setNum(0);
  }

  return (
    <div className="App">
      <div>현재 숫자 : {num}</div>
      <button onClick={() => {setNum(num+1)}}>숫자증가</button>
      <button onClick={() => {setNum(num-1)}}>숫자감소</button>

      <button onClick={numRecording}>숫자기록</button>
      <h1>저장된 숫자</h1>
      <ul>
       {numList.map((num) => (
          <li>{num}</li>
       ))}
      </ul>
    </div>
  );
}

export default App;
