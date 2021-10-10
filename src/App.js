import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [currentState, setCurrentState] = useState("");



  function numPress(num) {
    currentState ? setCurrentState(cur => cur + num) : setCurrentState(num);
  }

  useEffect(() => {
    setInput(currentState);
  }, [currentState])


  return (
    <div className="App">
      <div className="container">
        <div className="input">{input || 0}</div>
        <div className="row">
          <button className="btn btn-grey">AC</button>
          <button className="btn btn-grey" disabled={true}>%</button>
          <button className="btn btn-grey" disabled={true}>+/-</button>
          <button className="btn btn-orange">÷</button>
        </div>
        <div className="row">
          <button className="btn btn-grey" onClick={() => numPress("7")}>7</button>
          <button className="btn btn-grey" onClick={() => numPress("8")}>8</button>
          <button className="btn btn-grey" onClick={() => numPress("9")}> 9</button>
          <button className="btn btn-orange">X</button>
        </div>
        <div className="row">
          <button className="btn btn-grey" onClick={() => numPress("4")}>4</button>
          <button className="btn btn-grey" onClick={() => numPress("5")}>5</button>
          <button className="btn btn-grey" onClick={() => numPress("6")}>6</button>
          <button className="btn btn-orange" >-</button>
        </div>
        <div className="row">
          <button className="btn btn-grey" onClick={() => numPress("1")}>1</button>
          <button className="btn btn-grey" onClick={() => numPress("2")}>2</button>
          <button className="btn btn-grey" onClick={() => numPress("3")}>3</button>
          <button className="btn btn-orange">+</button>
        </div>
        <div className="row">
          <button className="btn btn-grey btn-0" onClick={() => numPress("0")}>0</button>
          <button className="btn btn-grey" disabled={true}>.</button>
          <button className="btn btn-orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;