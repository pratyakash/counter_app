import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        This is counter display&nbsp;
        <span data-test='count'>
          {count}
        </span>
      </h1>
      <button data-test='increament-button'>
        Increase
      </button>
    </div>
  );
}

export default App;
