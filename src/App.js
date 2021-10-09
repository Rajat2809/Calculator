import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="input"></div>
        <div className="row first-row">
          <button className="btn btn-grey">AC</button>
          <button className="btn btn-grey" disabled={true}>%</button>
          <button className="btn btn-grey" disabled={true}>+/-</button>
          <button className="btn btn-orange">÷</button>
        </div>
        <div className="row second-row">
          <button className="btn btn-grey">7</button>
          <button className="btn btn-grey">8</button>
          <button className="btn btn-grey">9</button>
          <button className="btn btn-orange">X</button>
        </div>
        <div className="row third-row">
          <button className="btn btn-grey">4</button>
          <button className="btn btn-grey">5</button>
          <button className="btn btn-grey">6</button>
          <button className="btn btn-orange">-</button>
        </div>
        <div className="row fourth-row">
          <button className="btn btn-grey">1</button>
          <button className="btn btn-grey">2</button>
          <button className="btn btn-grey">3</button>
          <button className="btn btn-orange">+</button>
        </div>
        <div className="row fifth-row">
          <button className="btn btn-grey">0</button>
          <button className="btn btn-grey">.</button>
          <button className="btn btn-grey">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
