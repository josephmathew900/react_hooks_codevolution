import "./App.css";
import React, { useReducer } from "react";
import CounterOne from "./components/customHook/CounterOne";
import CounterTwo from "./components/customHook/CounterTwo";

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
