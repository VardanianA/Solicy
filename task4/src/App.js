import { useState } from 'react';
import '../src/App.css';
import './index';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div class="inner">
        <button class="btn" onClick={() => setCount(count + 2)}>click me</button>
      </div>
      <div class="content">
        <span>{count}</span>
      </div>
    </div>
  );
}

export default App;