import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const inc = () => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          {counter}
        </p>
        <p className="App-link" onClick={inc}>
          btn
        </p>
      </header>
    </div>
  );
}

export default App;
