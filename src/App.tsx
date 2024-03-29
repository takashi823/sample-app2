import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React + Typescript アプリケーション</h1>
        <p>サンプルアプリ1</p>

        <p>サンプルアプリ２</p>

        <p>サンプルアプリ3</p>
        <p>URL{apiUrl}</p>
      </header>
    </div>
  );
}

export default App;
