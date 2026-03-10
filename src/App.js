import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Indicator from "./Indicator";
import Display from "./Display";
import Calc from "./Calc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p className="About">made by <a className="App-link" href="https://github.com/Kak0ytachel">
              chel0
          </a> with ❤<br/><a className="App-link" href={"https://www.8bitdo.com/retro-18-mechanical-numpad/"}>reference</a></p>

          <div className="LogoContainer">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to hello world.*/}
        {/*</p>*/}
        {/*  <p>hot reload is awesome!</p>*/}
          <Calc/>

        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
