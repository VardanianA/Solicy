import React, { useState } from 'react';
import LeftForm from './components/LeftForm';
import RightForm from './components/RightForm';
import './App.css';

export const Context = React.createContext();

function App() {
  const [inputFields, setInputField] = useState(['', '', '']);

  return (
    <Context.Provider value={{ inputFields, setInputField }}>
      <div className="App">
        <LeftForm />
        <div className="mid"></div>
        <RightForm />
      </div>
    </Context.Provider>
  );
};

export default App;
