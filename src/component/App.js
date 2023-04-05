import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

import './App.css';

function App() {
  return (
    <div className="component-app">
      <Display value='0'/>
      <ButtonPanel clickHandler={() => {}} />
    </div>
  );
}

export default App;
