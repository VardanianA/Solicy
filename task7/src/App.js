import React from 'react';
import LeftForm from './components/LeftForm';
import RightForm from './components/RightForm';
import Context from './components/Context';

function App() {
  return (
    <Context>
        <LeftForm />
        <div className="mid"></div>
        <RightForm />
    </Context>
  );
};

export default App;
