import React, { useState } from 'react';
import LeftForm from './components/LeftForm';
import RightForm from './components/RightForm';
import './App.css';

export const Context = React.createContext();

function App() {
  const [inputField, setInputField] = useState('');
  const [midInputField, setMidInputField] = useState('');
  const [endInputField, setEndInputField] = useState('');

  return (
    <Context.Provider value={{ inputField, midInputField, endInputField, setInputField, setMidInputField, setEndInputField }}>
      <div className="App">
        <LeftForm />
        <div className="mid"></div>
        <RightForm />
      </div>
    </Context.Provider>
  );
};

export default App;
