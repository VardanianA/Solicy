import React, { useState } from 'react';
import LeftForm from './components/LeftForm';
import RightForm from './components/RightForm';
import './App.css';


export const Context = React.createContext();

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  return (
    <Context.Provider value={{ text1, text2,text3, setText1, setText2, setText3 }}>
      <div className="App">
        <LeftForm />
        <div className="mid"></div>
        <RightForm />
      </div>
    </Context.Provider>
  );
}

export default App;
