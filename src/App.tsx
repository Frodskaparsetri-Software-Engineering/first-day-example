import React, {useState} from 'react';
import './App.css';

function App() {

  const [isHidden, setActive] = useState(false);

  const onToggle = () => {
    setActive(!isHidden);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 hidden={isHidden}>Hello World</h1>
        <button onClick={onToggle}>
          <p>Toggle</p>
        </button>
      </header>
    </div>
  );
}

export default App;
