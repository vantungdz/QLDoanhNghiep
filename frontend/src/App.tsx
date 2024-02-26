import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import userApi from "api/userApi";

function User() {
  useEffect(() => {
    userApi.getAll().then((response) => console.log(response));
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
