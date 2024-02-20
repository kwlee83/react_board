import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {

  //let name = 'kwleeCoding';

  //let [name, setName] = useState('kwleeCoding');

  let [num, setNum] = useState(1);

  //setTimeout(() => {setNum(num=num+1)}, 1000);

  return (
    <div className="App">
      <header className="App-header">
       
       <div>{num}</div>

      </header>
    </div>
  );
}

export default App;
