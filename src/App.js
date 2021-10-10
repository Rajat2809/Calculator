import './App.css';
import { useEffect, useState } from 'react';
import operations from './config';
import { roundOf } from './util';


function App() {

  const [input, setInput] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [lastState, setLaststate] = useState("");
  const [operator, setOperator] = useState("");
  const [disableOperator, setDisableOperator] = useState(true);
  const [disableEqual, setDisableEqual] = useState(true);
  const [disableClear, setDisableClear] = useState(true);


  function numPress(num) {
    if (currentState === "" && num === '0') return;
    currentState ? setCurrentState(cur => cur + num) : setCurrentState(num);
    setDisableOperator(false);
    setDisableClear(false);
    if (lastState) setDisableEqual(false);

  }

  useEffect(() => {
    setInput(currentState);
  }, [currentState])

  function operatorPress(opr) {
    setOperator(opr);
    if (lastState !== "")
      calculate();
    else
      setLaststate(currentState);
    setCurrentState("");
    setDisableOperator(true);

  }

  function calculate(opr) {
    let result;
    switch (operator) {
      case operations.divide:
        result = String(parseFloat(lastState) / parseFloat(currentState));
        break;
      case operations.multiply:
        result = String(parseFloat(lastState) * parseFloat(currentState));
        break;
      case operations.subtract:
        result = String(parseFloat(lastState) - parseFloat(currentState));
        break;
      case operations.add:
        result = String(parseFloat(lastState) + parseFloat(currentState));
        break;
      default: return;
    }
    setLaststate(result)
    setCurrentState("");
    setDisableEqual(true)
    if (opr === operations.equal) setDisableOperator(true)
  }

  function clear() {
    setInput("");
    setLaststate("");
    setCurrentState("");
    setOperator("");
    setDisableClear(true);
    setDisableEqual(true);
    setDisableOperator(true);
  }


  return (
    <div className="App">
      <div className="container">
        <div className="input">{(input !== "" || input === "0" ? input : roundOf(lastState)) || 0}</div>
        <div className="row">
          <button className="btn btn-grey" onClick={clear} disabled={disableClear}>AC</button>
          <button className="btn btn-grey" disabled={true}>%</button>
          <button className="btn btn-grey" disabled={true}>+/-</button>
          <button className="btn btn-orange" onClick={() => operatorPress(operations.divide)} disabled={disableOperator}>÷</button>
        </div>
        <div className="row">
          <button className="btn btn-grey" onClick={() => numPress("7")}>7</button>
          <button className="btn btn-grey" onClick={() => numPress("8")}>8</button>
          <button className="btn btn-grey" onClick={() => numPress("9")}> 9</button>
          <button className="btn btn-orange" onClick={() => operatorPress(operations.multiply)} disabled={disableOperator}>X</button>
        </div>
        <div className="row">
          <button className="btn btn-grey" onClick={() => numPress("4")}>4</button>
          <button className="btn btn-grey" onClick={() => numPress("5")}>5</button>
          <button className="btn btn-grey" onClick={() => numPress("6")}>6</button>
          <button className="btn btn-orange" onClick={() => operatorPress(operations.subtract)} disabled={disableOperator} >-</button>
        </div>
        <div className="row">
          <button className="btn btn-grey" onClick={() => numPress("1")}>1</button>
          <button className="btn btn-grey" onClick={() => numPress("2")}>2</button>
          <button className="btn btn-grey" onClick={() => numPress("3")}>3</button>
          <button className="btn btn-orange" onClick={() => operatorPress(operations.add)} disabled={disableOperator}>+</button>
        </div>
        <div className="row">
          <button className="btn btn-grey btn-0" onClick={() => numPress("0")}>0</button>
          <button className="btn btn-grey" disabled={true}>.</button>
          <button className="btn btn-orange" onClick={() => calculate(operations.equal)} disabled={disableEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;