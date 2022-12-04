/* eslint-disable react/react-in-jsx-scope */

import logo from "./logo.svg";
import "./App.css";

function App() {
  let Hello = (
    <div
      dangerouslySetInnerHTML={{ __html: "<h2>Hello World dada </h2>" }}
    ></div>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{Hello}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {}
      </header>
    </div>
  );
}

export default App;
